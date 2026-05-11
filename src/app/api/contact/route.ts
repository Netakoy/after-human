import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, messenger, task } = body

    if (!name || !messenger || !task) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'After Human Site <noreply@afterhuman.pro>',
      to: process.env.CONTACT_EMAIL ?? 'hello@afterhuman.pro',
      subject: `Новая заявка от ${name}${company ? ` (${company})` : ''}`,
      html: `
        <h2>Новая заявка с сайта After Human</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Компания:</strong> ${company || '—'}</p>
        <p><strong>Telegram / Email:</strong> ${messenger}</p>
        <p><strong>Задача:</strong></p>
        <p>${task.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}
