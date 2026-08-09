export interface SpecGroup {
  icon: string
  title: string
  items: string[]
}

export interface Highlight {
  icon: string
  title: string
  description: string
}

export interface MotorcycleModel {
  id: string
  name: string
  brand: string
  category: string
  tagline: string
  cc: number
  weight: number
  price: string
  year: number
  color: string
  image: string
  specs: {
    engine: SpecGroup
    transmission: SpecGroup
    brakes: SpecGroup
    dimensions: SpecGroup
    dryWeight: SpecGroup
    swingarm: SpecGroup
  }
  highlights: Highlight[]
  relatedIds: string[]
}

export const brands = [
  { name: 'KTM', style: 'bg-primary text-white' },
  { name: 'Kawasaki', style: 'bg-card text-foreground' },
  { name: 'Husqvarna', style: 'bg-card text-foreground' },
  { name: 'GASGAS', style: 'bg-card text-foreground' },
  { name: 'GASGAS', style: 'bg-card text-foreground' },
  { name: 'Vespa', style: 'bg-card text-foreground' },
  { name: 'aprilia', style: 'bg-card text-foreground' },
  { name: 'ZONTES', style: 'bg-card text-foreground' },
  { name: 'CFMOTO', style: 'bg-card text-foreground' },
]

export const serviceTypes = [
  {
    id: 'oil-change',
    icon: 'Droplets',
    title: 'تعویض روغن و فیلتر',
    description: 'تعویض کامل روغن سینتتیک با فیلتر اصلی. موتور شما را در بهترین عملکرد نگه می‌دارد.',
    duration: '۴۵ دقیقه',
    price: 'از ۸۵۰,۰۰۰ تومان',
    popular: false,
  },
  {
    id: 'general-inspection',
    icon: 'ClipboardCheck',
    title: 'معاینه فنی عمومی',
    description: 'بررسی جامع ۶۰ نکته‌ای ایمنی و عملکرد توسط تکنسین‌های دارای گواهینامه.',
    duration: '۹۰ دقیقه',
    price: 'از ۱,۲۰۰,۰۰۰ تومان',
    popular: true,
  },
  {
    id: 'major-service',
    icon: 'Wrench',
    title: 'سرویس اساسی (۱۰,۰۰۰ کیلومتر)',
    description: 'نگهداری دوره‌ای کامل شامل تنظیم سوپاپ، شمع، فیلترها و مایعات.',
    duration: '۳ تا ۴ ساعت',
    price: 'از ۳,۵۰۰,۰۰۰ تومان',
    popular: false,
  },
  {
    id: 'brake-service',
    icon: 'CircleDot',
    title: 'سرویس سیستم ترمز',
    description: 'بررسی لنت، تعویض مایع، تمیزکاری کالیپر و اندازه‌گیری دیسک برای بیشترین قدرت ترمز.',
    duration: '۶۰ دقیقه',
    price: 'از ۹۵۰,۰۰۰ تومان',
    popular: false,
  },
  {
    id: 'tire-replacement',
    icon: 'Circle',
    title: 'تعویض لاستیک',
    description: 'نصب لاستیک OEM یا پرفورمنس با بالانس چرخ و ریست سنسور فشار تایر.',
    duration: '۶۰ دقیقه',
    price: 'از ۵۰۰,۰۰۰ تومان',
    popular: false,
  },
  {
    id: 'performance-tune',
    icon: 'Gauge',
    title: 'تنظیم پرفورمنس',
    description: 'نقشه‌برداری ECU، سینک‌کردن گاز و تیونینگ اگزوز برای آزادسازی کامل توان موتور.',
    duration: '۲ تا ۳ ساعت',
    price: 'از ۴,۵۰۰,۰۰۰ تومان',
    popular: false,
  },
]

export const serviceCenters = [
  {
    id: 1,
    name: 'کویر موتور — تهران مرکزی',
    address: 'خیابان آزادی، تهران',
    phone: '۰۲۱-۴۴۵۵۶۶۷۷',
    hours: 'شنبه تا پنجشنبه: ۸:۰۰ تا ۱۸:۰۰',
  },
  {
    id: 2,
    name: 'کویر موتور — اصفهان',
    address: 'خیابان چهارباغ عباسی، اصفهان',
    phone: '۰۳۱-۳۳۴۴۵۵۶۶',
    hours: 'شنبه تا پنجشنبه: ۸:۰۰ تا ۱۷:۳۰',
  },
  {
    id: 3,
    name: 'کویر موتور — مشهد',
    address: 'بلوار امام رضا، مشهد',
    phone: '۰۵۱-۲۲۳۳۴۴۵۵',
    hours: 'شنبه تا پنجشنبه: ۸:۳۰ تا ۱۸:۰۰',
  },
]

export const motorcycleModels: MotorcycleModel[] = [
  {
    id: 'ktm-sx-f-249',
    name: 'KTM SX-F 249 (P)',
    brand: 'KTM',
    category: 'موتوکراس',
    tagline: 'DNA مسابقه‌ای خالص. ۲۴۹ سی‌سی قدرت شکست‌ناپذیر.',
    cc: 249,
    weight: 101,
    price: 'تماس با نمایندگی',
    year: 2023,
    color: 'نارنجی',
    image: '/images/ktm-sx-f-249.png',
    specs: {
      engine: {
        icon: 'Zap',
        title: 'موتور',
        items: [
          'تک‌سیلندر ۴ زمانه DOHC',
          '۲۴۹ سی‌سی',
          'خنک‌شونده با مایع، انژکتور',
          'انژکتور Keihin',
        ],
      },
      transmission: {
        icon: 'Settings',
        title: 'گیربکس',
        items: [
          'دنده‌ای ۵ سرعته',
          'کلاچ هیدرولیک Brembo',
          'فورک وارونه WP XACT 48 میلی‌متری',
          'کمک عقب WP XACT با لینکاژ',
        ],
      },
      brakes: {
        icon: 'Disc3',
        title: 'ترمزها',
        items: ['دیسک جلو ۲۶۰ میلی‌متری', 'دیسک عقب ۲۲۰ میلی‌متری'],
      },
      dimensions: {
        icon: 'Ruler',
        title: 'ابعاد',
        items: [
          'فاصله محورها: ۱۴۸۵ میلی‌متر',
          'ارتفاع زین: ۹۶۳ میلی‌متر',
          'وزن خشک: ۱۰۱ کیلوگرم',
          'ظرفیت باک: ۷.۲ لیتر',
        ],
      },
      dryWeight: {
        icon: 'Weight',
        title: 'وزن خشک',
        items: ['۱۰۱ کیلوگرم'],
      },
      swingarm: {
        icon: 'ChevronDown',
        title: 'سوئینگ‌آرم',
        items: ['رنگ: نارنجی', 'سال: ۱۴۰۲'],
      },
    },
    highlights: [
      {
        icon: 'Zap',
        title: 'موتور قدرتمند ۲۴۹ سی‌سی',
        description:
          'یک موتور تک‌سیلندر ۴ زمانه پیشرفته که عملکرد بی‌نظیر را با مهندسی دقیق برای قهرمانان ارائه می‌دهد.',
      },
      {
        icon: 'Settings2',
        title: 'کمک‌فنر WP XACT',
        description:
          'سیستم کمک‌فنر پیشرفته WP با کنترل میرایی دقیق برای بهترین تجربه آفرود.',
      },
      {
        icon: 'Shield',
        title: 'شاسی سبک‌وزن',
        description:
          'فریم فولادی کرومولی پیشرفته با سختی بالا و وزن خشک فوق‌العاده ۱۰۱ کیلوگرمی برای سریع‌ترین راکبان.',
      },
    ],
    relatedIds: ['kawasaki-z900', 'ktm-duke-390', 'husqvarna-norden'],
  },
  {
    id: 'kawasaki-z900',
    name: 'Kawasaki Z900',
    brand: 'Kawasaki',
    category: 'خیابانی',
    tagline: 'طراحی تهاجمی، عملکرد بی‌امان.',
    cc: 948,
    weight: 193,
    price: 'تماس با نمایندگی',
    year: 2024,
    color: 'سبز لیمویی',
    image: '/images/kawasaki-z900.png',
    specs: {
      engine: {
        icon: 'Zap',
        title: 'موتور',
        items: [
          'ردیفی ۴ سیلندر، ۴ زمانه',
          '۹۴۸ سی‌سی',
          'خنک‌شونده با مایع، انژکتور',
          'DOHC، ۱۶ سوپاپ',
        ],
      },
      transmission: {
        icon: 'Settings',
        title: 'گیربکس',
        items: [
          '۶ سرعته با کلاچ اسلیپر',
          'کلاچ هیدرولیک',
          'فورک وارونه ۴۱ میلی‌متری',
        ],
      },
      brakes: {
        icon: 'Disc3',
        title: 'ترمزها',
        items: ['دیسک دوگانه جلو ۳۰۰ میلی‌متری', 'دیسک عقب ۲۵۰ میلی‌متری'],
      },
      dimensions: {
        icon: 'Ruler',
        title: 'ابعاد',
        items: [
          'فاصله محورها: ۱۴۵۰ میلی‌متر',
          'ارتفاع زین: ۷۹۵ میلی‌متر',
          'وزن با سوخت: ۱۹۳ کیلوگرم',
          'ظرفیت باک: ۱۷ لیتر',
        ],
      },
      dryWeight: {
        icon: 'Weight',
        title: 'وزن',
        items: ['۱۹۳ کیلوگرم'],
      },
      swingarm: {
        icon: 'ChevronDown',
        title: 'سوئینگ‌آرم',
        items: ['رنگ: سبز لیمویی / مشکی', 'سال: ۱۴۰۳'],
      },
    },
    highlights: [
      {
        icon: 'Zap',
        title: '۱۲۵ اسب‌بخار ردیفی ۴ سیلندر',
        description:
          'موتور ۹۴۸ سی‌سی با ۱۲۵ اسب‌بخار و شخصیت پرانرژی که رانندگی پرشور را در هر جاده‌ای پاداش می‌دهد.',
      },
      {
        icon: 'Eye',
        title: 'طراحی Z تهاجمی',
        description:
          'زبان طراحی Sugomi با فریم تراسلیس نمایان، چراغ جلو LED و حالت شکارچیانه همه نگاه‌ها را جذب می‌کند.',
      },
      {
        icon: 'Shield',
        title: 'الکترونیک پیشرفته',
        description:
          'کنترل کشش KTRC، ABS و گاز الکترونیکی اطمینان و کنترل را در تمام شرایط فراهم می‌کنند.',
      },
    ],
    relatedIds: ['ktm-sx-f-249', 'ktm-duke-390', 'husqvarna-norden'],
  },
  {
    id: 'ktm-duke-390',
    name: 'KTM Duke 390',
    brand: 'KTM',
    category: 'خیابانی',
    tagline: 'متولد برای عملکرد. ساخته‌شده برای هیجان.',
    cc: 373,
    weight: 149,
    price: 'تماس با نمایندگی',
    year: 2024,
    color: 'نارنجی',
    image: '/images/ktm-duke-390.png',
    specs: {
      engine: {
        icon: 'Zap',
        title: 'موتور',
        items: [
          'تک‌سیلندر، ۴ زمانه',
          '۳۷۳ سی‌سی',
          'خنک‌شونده با مایع، انژکتور',
          'DOHC، ۴ سوپاپ',
        ],
      },
      transmission: {
        icon: 'Settings',
        title: 'گیربکس',
        items: [
          '۶ سرعته با کلاچ اسلیپر',
          'کلاچ هیدرولیک',
          'فورک وارونه WP 43 میلی‌متری',
        ],
      },
      brakes: {
        icon: 'Disc3',
        title: 'ترمزها',
        items: ['دیسک جلو ۳۲۰ میلی‌متری (Bybre)', 'دیسک عقب ۲۳۰ میلی‌متری'],
      },
      dimensions: {
        icon: 'Ruler',
        title: 'ابعاد',
        items: [
          'فاصله محورها: ۱۳۵۷ میلی‌متر',
          'ارتفاع زین: ۸۲۴ میلی‌متر',
          'وزن خشک: ۱۴۹ کیلوگرم',
          'ظرفیت باک: ۱۳.۴ لیتر',
        ],
      },
      dryWeight: {
        icon: 'Weight',
        title: 'وزن خشک',
        items: ['۱۴۹ کیلوگرم'],
      },
      swingarm: {
        icon: 'ChevronDown',
        title: 'سوئینگ‌آرم',
        items: ['رنگ: نارنجی', 'سال: ۱۴۰۳'],
      },
    },
    highlights: [
      {
        icon: 'Zap',
        title: '۴۴ اسب‌بخار تک‌سیلندر',
        description:
          'موتور ۳۷۳ سی‌سی با ۴۴ اسب‌بخار در بسته‌ای سبک‌وزن و پرانرژی که هر پیچ گاز را هیجان‌انگیز می‌کند.',
      },
      {
        icon: 'Target',
        title: 'ABS در پیچ',
        description:
          'Bosch 9.1MP ABS در حین پیچ حداکثر اطمینان ترمزگیری را حتی در وسط پیچ بدون کوچکترین سازشی فراهم می‌کند.',
      },
      {
        icon: 'Cpu',
        title: 'نمایشگر TFT و اتصال‌پذیری',
        description:
          'خوشه ابزار TFT تمام‌رنگ با اتصال بلوتوث و ناوبری گام‌به‌گام اطلاعات را در نوک انگشتان شما قرار می‌دهد.',
      },
    ],
    relatedIds: ['ktm-sx-f-249', 'kawasaki-z900', 'husqvarna-norden'],
  },
  {
    id: 'husqvarna-norden',
    name: 'Husqvarna Norden 901',
    brand: 'Husqvarna',
    category: 'آدونچر',
    tagline: 'هر افقی را بدون محدودیت کاوش کنید.',
    cc: 889,
    weight: 204,
    price: 'تماس با نمایندگی',
    year: 2024,
    color: 'آبی / سفید',
    image: '/images/husqvarna-norden.png',
    specs: {
      engine: {
        icon: 'Zap',
        title: 'موتور',
        items: [
          'دوقلو موازی، ۴ زمانه',
          '۸۸۹ سی‌سی',
          'خنک‌شونده با مایع، انژکتور',
          'DOHC، ۸ سوپاپ',
        ],
      },
      transmission: {
        icon: 'Settings',
        title: 'گیربکس',
        items: [
          '۶ سرعته با شیفتر سریع',
          'کلاچ هیدرولیک',
          'فورک WP APEX 48 میلی‌متری',
        ],
      },
      brakes: {
        icon: 'Disc3',
        title: 'ترمزها',
        items: ['دیسک دوگانه جلو ۳۲۰ میلی‌متری', 'دیسک عقب ۲۶۷ میلی‌متری'],
      },
      dimensions: {
        icon: 'Ruler',
        title: 'ابعاد',
        items: [
          'فاصله محورها: ۱۵۰۸ میلی‌متر',
          'ارتفاع زین: ۸۵۰/۸۷۰ میلی‌متر',
          'وزن خشک: ۲۰۴ کیلوگرم',
          'ظرفیت باک: ۱۹ لیتر',
        ],
      },
      dryWeight: {
        icon: 'Weight',
        title: 'وزن خشک',
        items: ['۲۰۴ کیلوگرم'],
      },
      swingarm: {
        icon: 'ChevronDown',
        title: 'سوئینگ‌آرم',
        items: ['رنگ: آبی / سفید', 'سال: ۱۴۰۳'],
      },
    },
    highlights: [
      {
        icon: 'Map',
        title: 'آماده برای آدونچر',
        description:
          'کمک‌فنر WP با کورس بلند، چرخ‌های سیم‌کشی ۲۱/۱۸ و باک بزرگ ۱۹ لیتری برای سفرهای طولانی جدی ساخته شده‌اند.',
      },
      {
        icon: 'Settings2',
        title: 'حالت‌های رانندگی',
        description:
          'حالت‌های جاده‌ای، باران، آفرود و آفرود پیشرفته به همراه کنترل سربالایی MSR موتور را با هر زمینی تطبیق می‌دهند.',
      },
      {
        icon: 'Zap',
        title: '۱۰۵ اسب‌بخار دوقلو',
        description:
          'موتور دوقلو موازی ۸۸۹ سی‌سی با ۱۰۵ اسب‌بخار و گشتاور گسترده که در هر سرعت و هر زمینی به‌راحتی کشش می‌دهد.',
      },
    ],
    relatedIds: ['kawasaki-z900', 'ktm-sx-f-249', 'ktm-duke-390'],
  },
]
