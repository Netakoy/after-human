import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — After Human',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-graphite text-muted-white px-6 md:px-16 py-20 max-w-3xl mx-auto">
      <Link
        href="/"
        className="font-unbounded text-xs tracking-[0.2em] text-silver/50 hover:text-white transition-colors mb-12 inline-block"
      >
        ← AFTER HUMAN
      </Link>

      <h1 className="font-unbounded font-bold text-2xl md:text-3xl mb-10 leading-tight">
        Политика обработки персональных данных
      </h1>

      <div className="space-y-8 font-unbounded text-sm text-silver/70 leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-muted-white text-xs tracking-[0.2em]">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
          <p>Настоящая политика определяет порядок обработки персональных данных пользователей сайта afterhuman.pro (далее — «Сайт»), которые оставляют заявку через контактную форму.</p>
          <p>Оператор персональных данных: After Human (далее — «Студия»).</p>
          <p>Обработка данных осуществляется в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-muted-white text-xs tracking-[0.2em]">2. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ</h2>
          <p>При отправке контактной формы мы получаем:</p>
          <ul className="list-none space-y-1 pl-4 border-l border-white/10">
            <li>— имя</li>
            <li>— название компании</li>
            <li>— номер телефона</li>
            <li>— контакт в мессенджере или email</li>
            <li>— описание задачи</li>
          </ul>
          <p>Также сайт использует Google Analytics 4 для сбора обезличенной статистики посещений: страны, устройства, источники трафика. Личность пользователя при этом не устанавливается.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-muted-white text-xs tracking-[0.2em]">3. ЦЕЛИ ОБРАБОТКИ</h2>
          <p>Данные из формы используются исключительно для связи с вами по вашему запросу и обсуждения проекта. Мы не передаём их третьим лицам, не используем для рекламы и не продаём.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-muted-white text-xs tracking-[0.2em]">4. ХРАНЕНИЕ И ЗАЩИТА</h2>
          <p>Данные хранятся на защищённых серверах сервиса Resend (США) в зашифрованном виде. Срок хранения — не более 1 года с момента получения заявки, если иное не требуется для работы над проектом.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-muted-white text-xs tracking-[0.2em]">5. ПРАВА ПОЛЬЗОВАТЕЛЯ</h2>
          <p>Вы вправе в любой момент запросить удаление своих данных, их уточнение или копию. Для этого напишите на почту:</p>
          <a
            href="mailto:sd.5431433@gmail.com"
            className="text-silver hover:text-white transition-colors underline underline-offset-4"
          >
            sd.5431433@gmail.com
          </a>
          <p>Мы обработаем запрос в течение 10 рабочих дней.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-muted-white text-xs tracking-[0.2em]">6. ИЗМЕНЕНИЯ ПОЛИТИКИ</h2>
          <p>Студия оставляет за собой право обновлять настоящую политику. Актуальная версия всегда доступна на этой странице.</p>
          <p className="text-silver/40">Дата последнего обновления: 2 июня 2025 г.</p>
        </section>

      </div>
    </main>
  )
}
