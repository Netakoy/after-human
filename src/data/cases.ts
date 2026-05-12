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
}

export const casesData: CaseData[] = [
  {
    id: 'oxyterra',
    index: '001',
    titleRu: 'OXYTERRA',
    titleEn: 'OXYTERRA',
    descriptionRu: [
      'Oxyterra — первый проект, где нам нужно было совместить кино и техническую точность. В первой части мы рассказывали историю про кислород и жизнь через визуальные образы и атмосферу.',
      'Во второй — уже буквально разбирали устройство по деталям: потоки воздуха, интерфейсы, графики, внутреннюю механику. Здесь было много переосмыслений в процессе — иногда мы переделывали сцены почти с нуля, потому что понимали: можно сделать сильнее. И именно такие проекты нам нравятся больше всего.',
    ],
    descriptionEn: [
      'Oxyterra was the first project where we had to merge cinematic storytelling with technical precision. In the first part, we told the story of oxygen and life through visual imagery and atmosphere.',
      'In the second, we literally broke the device down to its components: airflows, interfaces, charts, inner mechanics. There was a lot of rethinking along the way — sometimes we rebuilt scenes almost from scratch because we knew we could do better. These are exactly the kinds of projects we love most.',
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
          'Midjourney — референсы и раскадровка',
          'Runway ML, Kling — кинематографические сцены',
          'Topaz — апскейл до 4K',
        ],
        itemsEn: [
          'ChatGPT, DeepSeek — concept, prompts',
          'Midjourney — references and storyboard',
          'Runway ML, Kling — cinematic scenes',
          'Topaz — upscale to 4K',
        ],
      },
      {
        category: 'САУНД ДИЗАЙН',
        categoryEn: 'SOUND DESIGN',
        items: [
          'ElevenLabs — закадровый голос',
          'Artlist — музыка и SFX',
          'Живая запись атмосферы',
        ],
        itemsEn: [
          'ElevenLabs — voiceover',
          'Artlist — music and SFX',
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
    id: 'ai-doc',
    index: '002',
    titleRu: 'ДОКУМЕНТАЛЬНАЯ КОРОТКОМЕТРАЖКА',
    titleEn: 'AI SHORT DOCUMENTARY',
    descriptionRu: [
      'Наш первый большой проект начался с простой мысли: люди до сих пор не понимают, насколько далеко зашёл AI.',
      'Мы сделали документальный ролик про AI‑моделей — с сюжетом, закадровым голосом и атмосферой почти как у Netflix‑доков. Больше всего времени ушло не на картинки, а на эмоцию: живой голос, правильная мимика, естественные губы, звук улиц, музыка, детали. Именно после этого проекта появился After Human.',
    ],
    descriptionEn: [
      'Our first major project started with a simple idea: people still don\'t understand how far AI has come.',
      'We made a documentary about AI models — with a narrative, voiceover, and an atmosphere almost like a Netflix doc. Most of the time wasn\'t spent on visuals, but on emotion: a natural voice, correct facial expressions, realistic lip sync, street sounds, music, details. After Human was born from this project.',
    ],
    videos: ['woSrEnNNVNBtD4gSbskW1q'],
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
          'Midjourney — фреймы, референсы',
          'Runway ML, Kling — генерация видео',
          'Topaz — апскейл',
        ],
        itemsEn: [
          'ChatGPT, DeepSeek — script and prompts',
          'Midjourney — frames, references',
          'Runway ML, Kling — video generation',
          'Topaz — upscale',
        ],
      },
      {
        category: 'САУНД ДИЗАЙН',
        categoryEn: 'SOUND DESIGN',
        items: [
          'ElevenLabs — закадровый голос',
          'Artlist — музыка и SFX',
          'Живая запись атмосферы',
        ],
        itemsEn: [
          'ElevenLabs — voiceover',
          'Artlist — music and SFX',
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
      'Этот клип стал для нас проверкой на внимание к деталям. Один главный герой, несколько персонажей, один и тот же автомобиль в десятках сцен, спецэффекты, ночные съёмки, движение камеры — и всё это полностью создано с помощью AI.',
      'Самое сложное здесь было не «сгенерировать красиво», а удержать целостность мира: чтобы герой оставался собой в каждом кадре, а история не разваливалась на набор эффектных сцен. В итоге получился не эксперимент, а полноценный музыкальный клип с характером.',
    ],
    descriptionEn: [
      'This video became our test for attention to detail. One main character, several supporting roles, the same car across dozens of scenes, special effects, night shoots, camera motion — all of it created entirely with AI.',
      'The hardest part wasn\'t "generating something beautiful," but maintaining world consistency: keeping the character recognizable in every frame, and the story from falling apart into a collection of impressive but disconnected shots. The result wasn\'t an experiment — it was a full-fledged music video with a personality.',
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
    titleRu: 'ДЖИН НА БАЛИ',
    titleEn: 'GIN IN BALI',
    descriptionRu: [
      'Мы взяли знакомую историю про Джинна и перевернули её. Вместо волшебства — обычная квартира, пицца, телевизор и мечта сбежать на Бали.',
      'Получилась тёплая короткометражка про человека, который устал жить «не свою» жизнь. Без попытки что-то продать или удивить технологиями. Просто кино, которое хочется досмотреть до конца. Наверное, это один из тех проектов, где мы по-настоящему кайфовали от каждой сцены.',
    ],
    descriptionEn: [
      'We took a familiar genie story and flipped it. No magic — just a regular apartment, pizza, TV, and a dream to escape to Bali.',
      'What came out was a warm short film about a person tired of living someone else\'s life. No attempt to sell anything or show off technology. Just a film you actually want to watch to the end. Probably one of those projects where we genuinely loved every single scene.',
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
          'Midjourney — персонажи, раскадровка',
          'Kling, Runway — генерация сцен',
          'Topaz — апскейл',
        ],
        itemsEn: [
          'ChatGPT — script and prompts',
          'Midjourney — characters, storyboard',
          'Kling, Runway — scene generation',
          'Topaz — upscale',
        ],
      },
      {
        category: 'САУНД ДИЗАЙН',
        categoryEn: 'SOUND DESIGN',
        items: [
          'ElevenLabs — голоса персонажей',
          'Artlist — музыка и SFX',
          'Живая запись диалогов и атмосферы',
        ],
        itemsEn: [
          'ElevenLabs — character voices',
          'Artlist — music and SFX',
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
]
