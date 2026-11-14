export type TourKind = 'download' | 'features'

export type Step = {
  id: string
  kind: 'spot' | 'card' | 'done'
  target?: string
  title: string
  text: string
  note?: string
  tag?: string // وسم صغير فوق العنوان (مثل: قد لا تظهر لك)
  illu?: 'download' | 'folder' | 'install'
  // صور دليل التحميل داخل public/images/download-guide/ (الشرح مؤقت حسب اسم الملف ويُراجَع بعد إضافة الصور الحقيقية)
  images?: { file: string; caption: string }[]
  shot?: string // لقطة من لقطات التطبيق (data.ts)
  link?: string
}

export const DOWNLOAD_STEPS: Step[] = [
  { id: 'd1', kind: 'spot', target: '[data-tour="download-btn"]', title: 'اضغط على زر التحميل', text: 'الخطوة 1: اضغط على زر تحميل التطبيق للبدء!' },
  {
    id: 'd2', kind: 'card', illu: 'download', title: 'بدأ التحميل',
    text: 'ممتاز! بدأ تحميل تطبيق نور القرآن على هاتفك. انتظر حتى يكتمل التحميل.',
    note: 'الملف الذي تحمّله هو ملف تطبيق أندرويد بصيغة APK. لا نستطيع معرفة متى يكتمل التحميل من هنا، فعندما تظهر لك رسالة «File downloaded» (اكتمل التحميل) اضغط «التالي».',
    images: [{ file: 'step-01-download-again.png', caption: 'إن كنت حمّلت الملف من قبل ستظهر هذه النافذة: اضغط «Download again» (تحميل مرة أخرى).' }],
  },
  {
    id: 'd3', kind: 'card', illu: 'folder', title: 'افتح الملف',
    text: 'بعد اكتمال التحميل، اضغط «Open» في الرسالة التي ظهرت أعلى الشاشة. وإن اختفت الرسالة فافتح مجلد التنزيلات (Downloads) في هاتفك، وابحث عن ملف NoorAlQuran.apk واضغط عليه.',
    images: [
      { file: 'step-02-file-downloaded.png', caption: 'الطريقة 1: من رسالة «File downloaded» اضغط «Open».' },
      { file: 'step-03-downloads-list.png', caption: 'الطريقة 2: من صفحة Downloads اضغط على ملف NoorAlQuran.apk.' },
    ],
  },
  {
    id: 'd4', kind: 'card', illu: 'install', title: 'اضغط على تثبيت',
    text: 'الآن اضغط على تثبيت (Install) وانتظر قليلاً حتى يتم تثبيت التطبيق على هاتفك.',
    note: 'إذا طلب أندرويد السماح بالتثبيت من هذا المصدر: اسمح بذلك للمتصفح الذي نزّلت منه الملف فقط، وبشرط أن تثق بمصدر التطبيق. وبعد الانتهاء عطّل هذا الإذن من جديد.',
    images: [{ file: 'step-04-install.png', caption: 'اضغط «Install» (تثبيت).' }],
  },
  {
    id: 'd5', kind: 'card', illu: 'install', tag: 'قد لا تظهر لك', title: 'إذا ظهرت حماية Google Play',
    text: 'قد تظهر نافذة «App scan recommended». هذا طبيعي لأن التطبيق جديد ولم يُنشر في متجر Google Play. للمتابعة اضغط «Install without scanning» (التثبيت دون فحص). وإن طلب منك الهاتف رمز القفل أو البصمة فأدخله لتأكيد الاختيار.',
    note: 'يمكنك أيضاً الضغط على «Scan app» ليفحصه Google أولاً، لكنه قد يستغرق وقتاً. لا تضغط «Don\'t install app» لأنه يلغي التثبيت. تابع فقط إن كنت تثق بمصدر التطبيق.',
    images: [{ file: 'step-05-play-protect.png', caption: 'اضغط «Install without scanning» (الجملة الصغيرة التي يشير إليها السهم).' }],
  },
  {
    id: 'd6', kind: 'card', illu: 'install', title: 'تم تثبيت التطبيق',
    text: 'ظهرت رسالة «App installed» أي أن التطبيق تثبّت على هاتفك. اضغط «Open» (فتح) لتشغيل نور القرآن.',
    images: [{ file: 'step-06-installed.png', caption: 'اضغط «Open» (فتح).' }],
  },
  {
    id: 'd7', kind: 'done', title: 'مبارك! أصبح تطبيق نور القرآن جاهزاً على هاتفك.',
    text: 'نتمنى لك رحلة إيمانية مليئة بالخير والطمأنينة.',
  },
]

export const FEATURE_STEPS: Step[] = [
  { id: 'f1', kind: 'card', title: 'القرآن الكريم', text: '114 سورة و30 جزءاً، مع بحث وعلامات محفوظة ومتابعة للقراءة.', shot: 'shots/03-mushaf-surahs.jpg', link: '#/quran' },
  { id: 'f2', kind: 'card', title: 'الأذكار اليومية', text: 'أذكار الصباح والمساء وبعد الصلاة والنوم، مع الاستماع وعدّاد التسبيح.', shot: 'shots/06-adhkar-morning.jpg', link: '#/adhkar' },
  { id: 'f3', kind: 'card', title: 'مواقيت الصلاة', text: 'أوقات الصلاة اليومية مع عدّ تنازلي للصلاة القادمة.', shot: 'shots/10-prayer-times.jpg', link: '#/prayer' },
  { id: 'f4', kind: 'card', title: 'اتجاه القبلة', text: 'بوصلة تدلّك على اتجاه الكعبة المشرفة من موقعك.', shot: 'shots/11-qibla.jpg', link: '#/qibla' },
  { id: 'f5', kind: 'card', title: 'المسبحة الإلكترونية', text: 'عدّاد تسبيح وأهداف قابلة للتخصيص، مع تسبيح بالاهتزاز.', shot: 'shots/02-services.jpg', link: '#/tasbih' },
  { id: 'f6', kind: 'card', title: 'موسوعة الحديث الشريف', text: 'الأربعون النووية ودواوين الحديث في مكان واحد.', shot: 'shots/14-hadith.jpg', link: '#/hadith' },
  { id: 'f7', kind: 'card', title: 'أسماء الله الحسنى', text: '99 اسماً مع معانيها، وبحث وتلاوة متسلسلة.', shot: 'shots/15-asma-allah.jpg', link: '#/names' },
  { id: 'f8', kind: 'card', title: 'المساعد الإسلامي الذكي', text: 'يجيب عن أسئلتك في القرآن والأحاديث والمواقيت والأذكار.', shot: 'shots/13-assistant.jpg', link: '#/assistant' },
]

export const STEPS: Record<TourKind, Step[]> = { download: DOWNLOAD_STEPS, features: FEATURE_STEPS }
