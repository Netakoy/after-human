import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_TIMEOUT_MS = 7000

async function postToTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) throw new Error('Telegram env vars missing')
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
  })
  if (!res.ok) throw new Error(`Telegram API ${res.status}`)
}

// api.telegram.org недоступен из датацентра российского VPS — при сбое
// прямой отправки шлём через зарубежную копию сайта (/api/telegram-relay)
async function sendTelegram(text: string) {
  try {
    await postToTelegram(text)
  } catch (err) {
    const relayUrl = process.env.TELEGRAM_RELAY_URL
    if (!relayUrl) throw err
    const res = await fetch(relayUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-relay-secret': process.env.RELAY_SECRET ?? '',
      },
      body: JSON.stringify({ text }),
      signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
    })
    if (!res.ok) throw new Error(`Telegram relay ${res.status}`)
  }
}

async function sendEmail(params: { name: string; company?: string; phone?: string; messenger: string; task: string }) {
  const { name, company, phone, messenger, task } = params
  const resend = new Resend(process.env.RESEND_API_KEY)
  // Resend не бросает исключение при ошибке API — возвращает { error }
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM ?? 'After Human Site <noreply@afterhuman.pro>',
    to: process.env.CONTACT_EMAIL ?? 'hello@afterhuman.pro',
    subject: `Новая заявка от ${name}${company ? ` (${company})` : ''}`,
    html: `
      <h2>Новая заявка с сайта After Human</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Компания:</strong> ${company || '—'}</p>
      <p><strong>Телефон:</strong> ${phone || '—'}</p>
      <p><strong>Telegram / Email:</strong> ${messenger}</p>
      <p><strong>Задача:</strong></p>
      <p>${task.replace(/\n/g, '<br>')}</p>
    `,
  })
  if (error) throw new Error(`Resend: ${error.message}`)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, phone, messenger, task } = body

    if (!name || !messenger || !task) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }

    const telegramText = [
      '🔔 <b>Новая заявка — After Human</b>',
      '',
      `👤 <b>Имя:</b> ${name}`,
      `🏢 <b>Компания:</b> ${company || '—'}`,
      `📞 <b>Телефон:</b> ${phone || '—'}`,
      `📱 <b>Telegram / Email:</b> ${messenger}`,
      '',
      `📋 <b>Задача:</b>\n${task}`,
    ].join('\n')

    // Каналы независимы: заявка потеряна, только если упали оба
    const results = await Promise.allSettled([
      sendEmail({ name, company, phone, messenger, task }),
      sendTelegram(telegramText),
    ])

    const failed = results.filter((r) => r.status === 'rejected')
    for (const f of failed) {
      console.error('contact form delivery failed:', (f as PromiseRejectedResult).reason)
    }

    if (failed.length === results.length) {
      return NextResponse.json({ error: 'Send failed' }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('contact form error:', err)
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}
