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
    titleRu: 'БРЕНД-ВИДЕО OXYTERRA',
    titleEn: 'OXYTERRA BRAND FILM',
    descriptionRu: [
      'Клиент — OXYTERRA, производитель кислородного оборудования для медицинских и восстановительных процедур. До нас уже была попытка с другой командой — результат не устроил. Мы посмотрели предыдущую версию, поняли проблемы и предложили своё видение: два ролика — эмоциональный бренд-фильм про идею кислорода и жизни, и технический ролик с объяснением аппарата и интерфейса. Ключевой момент в работе: мы согласовывали с клиентом каждую сцену до запуска производства — это сократило правки и сделало процесс предсказуемым. Иногда полностью пересобирали графические сцены, потому что понимали: можно сделать сильнее. Именно такие проекты нам нравятся больше всего.',
    ],
    descriptionEn: [
      'The client is OXYTERRA, a manufacturer of oxygen equipment for medical and wellness procedures. A previous team had already attempted the project — the client wasn\'t satisfied with the result. We reviewed the earlier version, identified the issues, and proposed our own vision: two videos — an emotional brand film about the idea of oxygen and life, and a technical video explaining the device and its interface. Key to our process: we aligned with the client on every scene before production began, which reduced revisions and kept the workflow predictable. Some graphic scenes were rebuilt from scratch — because we knew we could do better. These are exactly the kinds of projects we love most.',
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
    titleRu: 'ДОКУМЕНТАЛЬНЫЙ ФИЛЬМ',
    titleEn: 'AI SHORT DOCUMENTARY',
    descriptionRu: [
      'Это был наш первый собственный AI-проект — без клиента и бюджета, только с идеей: сделать документальный фильм настолько хорошим, чтобы стало понятно — AI уже работает как полноценный инструмент кино. Концепция, сценарий, персонажи, озвучка, монтаж — всё с нуля. Изначально планировался ролик на минуту, но история выросла до полноценного фильма на 2,5 минуты. Больше всего времени ушло не на картинки, а на эмоцию: правильная мимика, живой голос, синхрон губ, звук улиц, музыка, детали. Именно после этого проекта появился After Human.',
    ],
    descriptionEn: [
      'This was our first in-house AI project — no client, no budget, just the idea: make a documentary good enough to prove that AI already works as a real filmmaking tool. Concept, script, characters, voiceover, editing — all from scratch. We originally planned a one-minute piece, but the story grew into a full 2.5-minute film. Most of the time went not into visuals, but into emotion: accurate facial expressions, natural voice, lip sync, street sounds, music, details. After Human was born from this project.',
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
      'Первый коммерческий проект: клип для артиста, который строит AI-музыкальный проект в жанре Afrobeat — с вымышленным цифровым персонажем и полноценным альбомом на нейросетях. Клиент пришёл с готовым треком и образом героя; мы создали персонажа, подобрали стиль, автомобиль и ещё двух героев для клипа. Главная задача — сделать не «красивый AI-эксперимент», а полноценный клип, который зритель воспринимает как настоящую съёмку. Один герой, несколько персонажей, один и тот же автомобиль в десятках сцен, спецэффекты, ночные съёмки — и всё это полностью через AI. Клип пока не вышел: идёт подготовка к полноценному запуску артиста.',
    ],
    descriptionEn: [
      'Our first commercial project: a music video for an artist building an AI music project in Afrobeat — with a fictional digital character and a full album made with neural networks. The client came with a finished track and a vision for the main character; we built the character, chose his style, the car, and two additional cast members. The main goal was not to make a "cool AI experiment" but a real music video that viewers would take as an actual shoot. One hero, several characters, the same car across dozens of scenes, night sequences, special effects — all through AI. The video hasn\'t dropped yet: the artist\'s full launch is in preparation.',
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
    titleRu: 'РЕКЛАМА БАЛИ',
    titleEn: 'BALI SHORT FILM',
    descriptionRu: [
      'Второй собственный проект — проверка: можем ли мы рассказать полноценную историю без закадрового голоса, только через визуал, звук и монтаж? Мы взяли знакомую историю про Джинна и перевернули её. Вместо волшебства — обычная квартира, пицца, телевизор и мечта сбежать на Бали. Сложнее всего было сохранить персонажа узнаваемым и при этом показать трансформацию: в обычной жизни герой выглядит проще и грубее, а в своих фантазиях — другим человеком. Получилось тёплое кино, которое хочется досмотреть до конца. Один из тех проектов, где мы по-настоящему кайфовали от каждой сцены.',
    ],
    descriptionEn: [
      'Our second in-house project — a test: can we tell a complete story without a voiceover, using only visuals, sound, and editing? We took a familiar genie story and flipped it. No magic — just a regular apartment, pizza, TV, and a dream to escape to Bali. The hardest part was keeping the character recognizable while showing his transformation: in everyday life he looks rougher and more ordinary, but in his fantasies he sees himself as a different person. What came out was a warm short film you actually want to watch to the end — one of those projects where we genuinely loved every single scene.',
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
