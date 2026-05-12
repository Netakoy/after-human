import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) return
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
  })
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

    await Promise.all([
      resend.emails.send({
        from: 'After Human Site <noreply@afterhuman.pro>',
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
      }),
      sendTelegram(telegramText),
    ])

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}
