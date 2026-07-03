import { NextRequest, NextResponse } from 'next/server'

// Ретранслятор для российского VPS, откуда api.telegram.org недоступен.
// Работает только на зарубежном хостинге (Vercel) и требует общий секрет.
export async function POST(req: NextRequest) {
  const secret = process.env.RELAY_SECRET
  if (!secret || req.headers.get('x-relay-secret') !== secret) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  }

  const { text } = await req.json()
  if (typeof text !== 'string' || !text) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
  })
  if (!res.ok) {
    return NextResponse.json({ error: `Telegram API ${res.status}` }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
