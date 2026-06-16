export interface PipelineSection {
  category: string
  categoryEn: string
  items: string[]
  itemsEn: string[]
}

export interface CaseData {
  id: string
  index: string
  titleRu: string
  titleEn: string
  descriptionRu: string[]
  descriptionEn: string[]
  videos: string[]  // Kinescope IDs
  videoPosters?: string[]  // per-video poster overrides
  posterSrc: string
  gallery: string[]
  pipeline: PipelineSection[]
  fullWidth?: boolean
}

export const casesData: CaseData[] = [
  {
    id: 'oxyterra',
    index: '001',
    titleRu: 'БРЕНД-ВИДЕО OXYTERRA',
    titleEn: 'OXYTERRA BRAND FILM',
    descriptionRu: [
      'Клиент — OXYTERRA, производитель кислородного оборудования для медицинских и восстановительных процедур.',
      'До нас уже была попытка создать бренд-видео с другой командой, но результат не устроил клиента. Мы изучили предыдущую версию, поняли слабые места и предложили собственное видение проекта.',
      'В результате сделали два отдельных ролика:\n— эмоциональный бренд-фильм про идею кислорода и жизни;\n— технический ролик с объяснением принципа работы аппарата и интерфейса.',
      'Ключевой особенностью проекта стало поэтапное согласование каждой сцены ещё до запуска производства. Это позволило сократить количество правок и сделать процесс полностью предсказуемым.',
      'Некоторые графические сцены мы пересобирали с нуля уже в процессе, потому что понимали: можно сделать сильнее.',
      'Именно такие проекты нам нравятся больше всего.',
    ],
    descriptionEn: [
      'The client is OXYTERRA, a manufacturer of oxygen equipment for medical and wellness procedures. A previous team had already attempted the project — the client wasn\'t satisfied with the result. We reviewed the earlier version, identified the issues, and proposed our own vision: two videos — an emotional brand film about the idea of oxygen and life, and a technical video explaining the device and its interface.',
      'Key to our process: we aligned with the client on every scene before production began, which reduced revisions and kept the workflow predictable.',
      'Some graphic scenes were rebuilt from scratch — because we knew we could do better. These are exactly the kinds of projects we love most.',
    ],
    videos: ['iQrV4TBCLccUmq1HiDSGYG', 'eWhqsSyY7oNSKQmsSJntms'],
    videoPosters: ['/images/cases/oxyterra.png', '/images/cases/oxyterra/5.png'],
    posterSrc: '/images/cases/oxyterra.png',
    gallery: [
      '/images/cases/oxyterra/1.png',
      '/images/cases/oxyterra/2.png',
      '/images/cases/oxyterra/3.png',
      '/images/cases/oxyterra/4.png',
      '/images/cases/oxyterra/5.png',
      '/images/cases/oxyterra/6.png',
      '/images/cases/oxyterra/7.png',
      '/images/cases/oxyterra/8.png',
    ],
    pipeline: [
      {
        category: 'ВИДЕО И ВИЗУАЛИЗАЦИЯ',
        categoryEn: 'VIDEO & VISUALIZATION',
        items: [
          'ChatGPT, DeepSeek — концепция, промты',
          'MidJourney, NanoBanana Pro — референсы и раскадровка',
          'Runway ML, Kling — кинематографические сцены',
          'Topaz Video AI — апскейл и финальная подготовка видео до 4K',
        ],
        itemsEn: [
          'ChatGPT, DeepSeek — concept, prompts',
          'MidJourney, NanoBanana Pro — references and storyboard',
          'Runway ML, Kling — cinematic scenes',
          'Topaz Video AI — upscale and final video prep to 4K',
        ],
      },
      {
        category: 'САУНД ДИЗАЙН',
        categoryEn: 'SOUND DESIGN',
        items: [
          'Suno, ElevenLabs — саунд-дизайн, музыка, SFX и живая запись атмосферы',
        ],
        itemsEn: [
          'Suno, ElevenLabs — sound design, music, SFX and live ambient recording',
        ],
      },
      {
        category: 'ПОСТПРОДАКШЕН',
        categoryEn: 'POST-PRODUCTION',
        items: [
          'Final Cut Pro — монтаж, сведение',
          'Ableton Live — мастеринг',
        ],
        itemsEn: [
          'Final Cut Pro — editing, mixing',
          'Ableton Live — mastering',
        ],
      },
    ],
  },
  {
    id: 'ai-doc',
    index: '002',
    titleRu: 'ДОКУМЕНТАЛЬНЫЙ ФИЛЬМ ПРО AI-МОДЕЛЕЙ',
    titleEn: 'AI SHORT DOCUMENTARY',
    descriptionRu: [
      'Это был наш первый собственный AI-проект без клиента и бюджета — только идея и желание проверить границы технологии.',
      'Мы хотели сделать документальный фильм настолько убедительным, чтобы стало понятно: AI уже работает как полноценный инструмент кино.',
      'Концепция, сценарий, персонажи, озвучка и монтаж создавались полностью с нуля.',
      'Изначально проект задумывался как минутный ролик, но в процессе вырос в полноценный короткометражный фильм.',
      'Больше всего времени ушло не на генерацию кадров, а на эмоцию:\nправильную мимику,\nживой голос,\nсинхрон губ,\nатмосферный звук,\nмузыку\nи детали среды.',
      'Именно после этого проекта появился After Human.',
    ],
    descriptionEn: [
      'This was our first in-house AI project — no client, no budget, just the idea: make a documentary good enough to prove that AI already works as a real filmmaking tool.',
      'Concept, script, characters, voiceover, editing — all from scratch. We originally planned a one-minute piece, but the story grew into a full 2.5-minute film.',
      'Most of the time went not into visuals, but into emotion: accurate facial expressions, natural voice, lip sync, street sounds, music, details. After Human was born from this project.',
      'We made a documentary about AI models — with a narrative, voiceover, and an atmosphere almost like a Netflix doc. Most of the time wasn\'t spent on visuals, but on emotion: a natural voice, correct facial expressions, realistic lip sync, street sounds, music, details. After Human was born from this project.',
    ],
    videos: ['hviAyE5RvDTfUJkRK7RMFo'],
    posterSrc: '/images/cases/ai.png',
    gallery: [
      '/images/cases/ai-doc/1.png',
      '/images/cases/ai-doc/2.png',
      '/images/cases/ai-doc/3.png',
      '/images/cases/ai-doc/4.png',
    ],
    pipeline: [
      {
        category: 'ВИДЕО',
        categoryEn: 'VIDEO',
        items: [
          'ChatGPT, DeepSeek — сценарий и промты',
          'Midjourney, NanoBanana Pro — фреймы, референсы',
          'Runway ML, Kling — генерация видео',
          'Topaz Video AI — апскейл',
        ],
        itemsEn: [
          'ChatGPT, DeepSeek — script and prompts',
          'Midjourney, NanoBanana Pro — frames, references',
          'Runway ML, Kling — video generation',
          'Topaz Video AI — upscale',
        ],
      },
      {
        category: 'САУНД ДИЗАЙН',
        categoryEn: 'SOUND DESIGN',
        items: [
          'Suno — музыка',
          'ElevenLabs — закадровый голос',
          'Artlist — SFX',
          'Живая запись атмосферы',
        ],
        itemsEn: [
          'Suno — music',
          'ElevenLabs — voiceover',
          'Artlist — SFX',
          'Live ambient recording',
        ],
      },
      {
        category: 'ПОСТПРОДАКШЕН',
        categoryEn: 'POST-PRODUCTION',
        items: [
          'Final Cut Pro — монтаж, сведение',
          'Ableton Live — мастеринг',
        ],
        itemsEn: [
          'Final Cut Pro — editing, mixing',
          'Ableton Live — mastering',
        ],
      },
    ],
  },
  {
    id: 'african-clip',
    index: '003',
    titleRu: 'МУЗЫКАЛЬНЫЙ КЛИП',
    titleEn: 'MUSIC VIDEO',
    descriptionRu: [
      'Первый коммерческий проект: клип для артиста, который строит AI-музыкальный проект в жанре Afrobeat — с вымышленным цифровым персонажем и полноценным музыкальным альбомом, созданным с помощью нейросетей.',
      'Клиент пришёл с готовым треком и образом героя; мы создали персонажа, подобрали стиль, автомобиль и ещё двух героев для клипа. Главная задача — сделать не «красивый AI-эксперимент», а полноценный клип, который зритель воспринимает как настоящую съёмку.',
      'Один герой, несколько персонажей, один и тот же автомобиль в десятках сцен, спецэффекты, ночные съёмки — и всё это полностью через AI. Клип пока не вышел: идёт подготовка к полноценному запуску артиста.',
    ],
    descriptionEn: [
      'Our first commercial project: a music video for an artist building an AI music project in Afrobeat — with a fictional digital character and a full album made with neural networks.',
      'The client came with a finished track and a vision for the main character; we built the character, chose his style, the car, and two additional cast members. The main goal was not to make a "cool AI experiment" but a real music video that viewers would take as an actual shoot.',
      'One hero, several characters, the same car across dozens of scenes, night sequences, special effects — all through AI. The video hasn\'t dropped yet: the artist\'s full launch is in preparation.',
    ],
    videos: ['eUfwrUseNsesFui2zqBBUg'],
    posterSrc: '/images/cases/african-clip.png',
    gallery: [
      '/images/cases/african-clip/1.jpeg',
      '/images/cases/african-clip/2.jpeg',
      '/images/cases/african-clip/3.jpeg',
      '/images/cases/african-clip/4.jpeg',
    ],
    pipeline: [
      {
        category: 'ВИДЕО',
        categoryEn: 'VIDEO',
        items: [
          'Chat GPT, DeepSeek — промты',
          'Nano Banana Pro, Midjourney — фреймы, референсы',
          'Kling 2.6, 3.0, Omni, Google Veo — генерация видео',
          'Topaz — апскейл видео',
        ],
        itemsEn: [
          'Chat GPT, DeepSeek — prompts',
          'Nano Banana Pro, Midjourney — frames, references',
          'Kling 2.6, 3.0, Omni, Google Veo — video generation',
          'Topaz — video upscale',
        ],
      },
      {
        category: 'САУНД ДИЗАЙН',
        categoryEn: 'SOUND DESIGN',
        items: [
          'ElevenLabs — озвучка, переозвучка, генерация голоса',
          'Suno — генерация музыки',
          'Artlist — SFX',
          'Живая запись звуков окружения',
        ],
        itemsEn: [
          'ElevenLabs — dubbing, voiceover, voice generation',
          'Suno — music generation',
          'Artlist — SFX',
          'Live ambient sound recording',
        ],
      },
      {
        category: 'ПОСТПРОДАКШЕН',
        categoryEn: 'POST-PRODUCTION',
        items: [
          'Final Cut Pro — монтаж, сведение, цветокоррекция',
          'Ableton Live — SFX, мастеринг, обработка',
        ],
        itemsEn: [
          'Final Cut Pro — editing, mixing, color grading',
          'Ableton Live — SFX, mastering, processing',
        ],
      },
    ],
  },
  {
    id: 'bali',
    index: '004',
    titleRu: 'КОРОТКОМЕТРАЖНЫЙ ФИЛЬМ «ДЖИНН НА БАЛИ»',
    titleEn: 'BALI SHORT FILM',
    descriptionRu: [
      'Второй собственный проект студии.',
      'Проверка: можем ли мы рассказать полноценную историю без закадрового голоса — только через визуал, звук и монтаж.',
      'Мы взяли знакомую историю про джинна и полностью переосмыслили её.',
      'Вместо магии — обычная квартира, пицца, телевизор и мечта сбежать на Бали.',
      'Самой сложной задачей было сохранить ощущение реальности и при этом показать внутреннюю трансформацию героя. В обычной жизни он выглядит проще и грубее, а в своих фантазиях — совсем другим человеком.',
      'В итоге получилось тёплое короткометражное кино, которое хочется досмотреть до конца.',
      'Один из тех проектов, где мы по-настоящему кайфовали от каждой сцены.',
    ],
    descriptionEn: [
      'Our second in-house project — a test: can we tell a complete story without a voiceover, using only visuals, sound, and editing?',
      'We took a familiar genie story and flipped it. No magic — just a regular apartment, pizza, TV, and a dream to escape to Bali. The hardest part was keeping the character recognizable while showing his transformation: in everyday life he looks rougher and more ordinary, but in his fantasies he sees himself as a different person.',
      'What came out was a warm short film you actually want to watch to the end — one of those projects where we genuinely loved every single scene.',
    ],
    videos: ['2iF9V3k7QYZcuPixbJ5UGE'],
    posterSrc: '/images/cases/Bali.png',
    gallery: [
      '/images/cases/bali/1.png',
      '/images/cases/bali/2.jpeg',
      '/images/cases/bali/3.jpeg',
      '/images/cases/bali/4.png',
    ],
    pipeline: [
      {
        category: 'ВИДЕО',
        categoryEn: 'VIDEO',
        items: [
          'ChatGPT — сценарий и промты',
          'Midjourney, NanoBanana Pro — персонажи, раскадровка',
          'Kling, Runway — генерация сцен',
          'Topaz Video AI — апскейл',
        ],
        itemsEn: [
          'ChatGPT — script and prompts',
          'Midjourney, NanoBanana Pro — characters, storyboard',
          'Kling, Runway — scene generation',
          'Topaz Video AI — upscale',
        ],
      },
      {
        category: 'САУНД ДИЗАЙН',
        categoryEn: 'SOUND DESIGN',
        items: [
          'Suno — музыка',
          'ElevenLabs — голоса персонажей',
          'Artlist — SFX',
          'Живая запись диалогов и атмосферы',
        ],
        itemsEn: [
          'Suno — music',
          'ElevenLabs — character voices',
          'Artlist — SFX',
          'Live recording of dialogue and atmosphere',
        ],
      },
      {
        category: 'ПОСТПРОДАКШЕН',
        categoryEn: 'POST-PRODUCTION',
        items: [
          'Final Cut Pro — монтаж, сведение',
          'Ableton Live — мастеринг, обработка звука',
        ],
        itemsEn: [
          'Final Cut Pro — editing, mixing',
          'Ableton Live — mastering, sound processing',
        ],
      },
    ],
  },
  {
    id: 'chery-tiggo',
    index: '005',
    titleRu: 'CHERY TIGGO 7 PRO',
    titleEn: 'CHERY TIGGO 7 PRO',
    descriptionRu: [
      'Креативная версия рекламного ролика, реализованная за 4 дня.',
      'В центре сюжета — деревенская бабушка, которая уверенно управляет современным кроссовером, демонстрируя его универсальность и простоту в использовании. От сельских дорог до Москвы — один автомобиль для повседневных задач, поездок и покупок.',
      'Весь видеоконтент создан с использованием только Seedance 2.0 — одной из самых передовых нейросетей для генерации видео на момент создания ролика.',
    ],
    descriptionEn: [
      'A creative commercial produced in just 4 days.',
      'At the center of the story is a village grandmother who confidently drives a modern crossover, showcasing its versatility and ease of use. From rural roads to Moscow — one car for everyday errands, trips, and shopping.',
      'All video content was created using Seedance 2.0 only — one of the most advanced AI video generation models at the time of production.',
    ],
    videos: ['iKBruCxTyGec34xSAo6hmx'],
    posterSrc: '/images/cases/chery.png',
    gallery: [
      '/images/cases/chery/1.png',
      '/images/cases/chery/2.png',
      '/images/cases/chery/3.png',
      '/images/cases/chery/4.png',
    ],
    pipeline: [
      {
        category: 'ВИДЕО',
        categoryEn: 'VIDEO',
        items: [
          'Seedance 2.0 — генерация всего видеоконтента',
        ],
        itemsEn: [
          'Seedance 2.0 — all video content generation',
        ],
      },
      {
        category: 'ПОСТПРОДАКШЕН',
        categoryEn: 'POST-PRODUCTION',
        items: [
          'Final Cut Pro — монтаж, сведение',
        ],
        itemsEn: [
          'Final Cut Pro — editing, mixing',
        ],
      },
    ],
  },
  {
    id: 'dom',
    index: '006',
    titleRu: 'РЕСТОРАН DOM',
    titleEn: 'RESTAURANT DOM',
    descriptionRu: [
      'Клиент — ресторан DOM (DEUS OPTIMUS MAXIMUS) на Бали. Новое заведение с итальянской кухней, европейским уровнем сервиса и командой, которая вложила в открытие по-настоящему много. Главная задача бренд-видео — донести не атмосферу, а убеждённость: здесь настоящая итальянская кухня, а не её интерпретация.',
      'Нашим решением стал бокал. Зритель погружается внутрь — и оказывается в истории древнего Рима: его величие, натуральность, характер. Так мы рассказали про итальянскую кухню через образ, а не через слова. Финальная сцена — девушка с бокалом, вечер, расслабленность. Всё, что нужно сказать — уже сказано.',
      'Сам ресторан снимался с реальных фотографий: важно было точно передать интерьер и масштаб. Никакой самодеятельности — только то, что есть на самом деле.',
    ],
    descriptionEn: [
      'The client is DOM (DEUS OPTIMUS MAXIMUS), a new restaurant on Bali. Italian cuisine, European-level service, and a team that put a great deal into the opening. The brand film had one job: convince the viewer that this is real Italian food — not an interpretation of it.',
      'Our solution was a glass of wine. The viewer steps inside it — and lands in the history of ancient Rome: its grandeur, natural ingredients, character. That\'s how we told the story of Italian cuisine through imagery, not words. The final scene: a woman with a glass, an evening, ease. Everything that needed to be said was already said.',
      'The restaurant itself was built from real photographs — it was crucial to capture the interior accurately and convey its scale. No invention — only what\'s actually there.',
    ],
    videos: ['7CacC84J2i6CeRpVJpkn32'],
    posterSrc: '/images/cases/dom.jpeg',
    gallery: [
      '/images/cases/dom/1.jpeg',
      '/images/cases/dom/2.jpeg',
      '/images/cases/dom/3.jpeg',
      '/images/cases/dom/4.jpeg',
    ],
    pipeline: [
      {
        category: 'ВИДЕО И ВИЗУАЛИЗАЦИЯ',
        categoryEn: 'VIDEO & VISUALIZATION',
        items: [
          'ChatGPT, DeepSeek — концепция, промты',
          'Midjourney, NanoBanana Pro — референсы и раскадровка',
          'Runway ML, Kling — кинематографические сцены',
          'Topaz Video AI — апскейл до 4K',
        ],
        itemsEn: [
          'ChatGPT, DeepSeek — concept, prompts',
          'Midjourney, NanoBanana Pro — references and storyboard',
          'Runway ML, Kling — cinematic scenes',
          'Topaz Video AI — upscale to 4K',
        ],
      },
      {
        category: 'САУНД ДИЗАЙН',
        categoryEn: 'SOUND DESIGN',
        items: [
          'Suno — музыка',
          'ElevenLabs — закадровый голос',
          'Artlist — SFX',
        ],
        itemsEn: [
          'Suno — music',
          'ElevenLabs — voiceover',
          'Artlist — SFX',
        ],
      },
      {
        category: 'ПОСТПРОДАКШЕН',
        categoryEn: 'POST-PRODUCTION',
        items: [
          'Final Cut Pro — монтаж, сведение',
          'Ableton Live — мастеринг',
        ],
        itemsEn: [
          'Final Cut Pro — editing, mixing',
          'Ableton Live — mastering',
        ],
      },
    ],
  },
  {
    id: 'eileen-fisher',
    index: '007',
    titleRu: 'EILEEN FISHER',
    titleEn: 'EILEEN FISHER',
    descriptionRu: [
      'Во время экспериментов с различными AI-визуалами мы заметили, что самые тёплые и атмосферные кадры часто объединяет одежда из натуральных материалов — льна, хлопка и других естественных тканей. Это вдохновило нас найти бренд, чья философия построена вокруг такой эстетики.',
      'Так мы выбрали EILEEN FISHER — американский бренд, основанный в Нью-Йорке в 1984 году. Он известен своим минималистичным дизайном, натуральными материалами и спокойной, естественной визуальной эстетикой.',
      'Для проекта мы создали тёплый рекламный ролик с закадровым голосом. В качестве референсов использовались образы и одежда с официального сайта и Instagram бренда. Все модели и персонажи в видео были полностью созданы с помощью искусственного интеллекта.',
    ],
    descriptionEn: [
      'While experimenting with various AI visuals, we noticed that the warmest and most atmospheric shots often shared one thing in common: clothing made from natural materials — linen, cotton, and other organic fabrics. This inspired us to find a brand whose philosophy is built around that very aesthetic.',
      'We chose EILEEN FISHER — an American brand founded in New York in 1984, known for its minimalist design, natural materials, and calm, effortless visual identity.',
      'For the project, we created a warm brand film with a voiceover. References were drawn from imagery and clothing featured on the brand\'s official website and Instagram. All models and characters in the video were created entirely using artificial intelligence.',
    ],
    videos: ['6en8vBqfP9r1DtjS6Cq3nb'],
    posterSrc: '/images/cases/eileen-fisher/1.png',
    gallery: [
      '/images/cases/eileen-fisher/1.png',
      '/images/cases/eileen-fisher/2.png',
      '/images/cases/eileen-fisher/3.png',
      '/images/cases/eileen-fisher/4.png',
    ],
    pipeline: [
      {
        category: 'ВИДЕО И ВИЗУАЛИЗАЦИЯ',
        categoryEn: 'VIDEO & VISUALIZATION',
        items: [
          'ChatGPT — концепция, промты',
          'Midjourney, NanoBanana Pro — референсы и раскадровка',
          'Runway ML, Kling — кинематографические сцены',
          'Topaz Video AI — апскейл до 4K',
        ],
        itemsEn: [
          'ChatGPT — concept, prompts',
          'Midjourney, NanoBanana Pro — references and storyboard',
          'Runway ML, Kling — cinematic scenes',
          'Topaz Video AI — upscale to 4K',
        ],
      },
      {
        category: 'САУНД ДИЗАЙН',
        categoryEn: 'SOUND DESIGN',
        items: [
          'ElevenLabs — закадровый голос',
          'Suno — музыка',
          'Artlist — SFX',
        ],
        itemsEn: [
          'ElevenLabs — voiceover',
          'Suno — music',
          'Artlist — SFX',
        ],
      },
      {
        category: 'ПОСТПРОДАКШЕН',
        categoryEn: 'POST-PRODUCTION',
        items: [
          'Final Cut Pro — монтаж, сведение',
          'Ableton Live — мастеринг',
        ],
        itemsEn: [
          'Final Cut Pro — editing, mixing',
          'Ableton Live — mastering',
        ],
      },
    ],
  },
  {
    id: 'day-off',
    index: '008',
    titleRu: 'DAY OFF — NOSE PERFUMES',
    titleEn: 'DAY OFF — NOSE PERFUMES',
    descriptionRu: [
      'Рекламный ролик для соц сетей парфюма Nose Perfumes, в котором нам удалось отразить прелести дней "ничего не делания". Само название аромата Day Off побудило нас искать и найти романтику в те моменты, когда казалось бы пустой день может принести человеку радость и наслаждение.',
    ],
    descriptionEn: [
      'A social media ad for Nose Perfumes\' Day Off fragrance — a film about the beauty of doing nothing. The name itself led us to look for, and find, the romance in those moments when an empty day can still bring genuine joy and pleasure.',
    ],
    videos: ['rkJSjjNHxb19WfQKgHgwAL'],
    posterSrc: '/images/cases/day-off/1.png',
    gallery: [
      '/images/cases/day-off/1.png',
      '/images/cases/day-off/2.png',
      '/images/cases/day-off/3.png',
      '/images/cases/day-off/4.png',
    ],
    pipeline: [
      {
        category: 'ВИДЕО И ВИЗУАЛИЗАЦИЯ',
        categoryEn: 'VIDEO & VISUALIZATION',
        items: [
          'ChatGPT — концепция, промты',
          'Midjourney, NanoBanana Pro — референсы и раскадровка',
          'Runway ML, Kling — кинематографические сцены',
          'Topaz Video AI — апскейл до 4K',
        ],
        itemsEn: [
          'ChatGPT — concept, prompts',
          'Midjourney, NanoBanana Pro — references and storyboard',
          'Runway ML, Kling — cinematic scenes',
          'Topaz Video AI — upscale to 4K',
        ],
      },
      {
        category: 'САУНД ДИЗАЙН',
        categoryEn: 'SOUND DESIGN',
        items: [
          'ElevenLabs — закадровый голос',
          'Suno — музыка',
          'Artlist — SFX',
        ],
        itemsEn: [
          'ElevenLabs — voiceover',
          'Suno — music',
          'Artlist — SFX',
        ],
      },
      {
        category: 'ПОСТПРОДАКШЕН',
        categoryEn: 'POST-PRODUCTION',
        items: [
          'Final Cut Pro — монтаж, сведение',
          'Ableton Live — мастеринг',
        ],
        itemsEn: [
          'Final Cut Pro — editing, mixing',
          'Ableton Live — mastering',
        ],
      },
    ],
  },
]
