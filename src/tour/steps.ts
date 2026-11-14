export type TourKind = 'download' | 'features'

export type Step = {
  id: string
  kind: 'spot' | 'card' | 'done'
  target?: string
  title: string
  text: string
  note?: string
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
    note: 'الملف الذي تحمّله هو ملف تطبيق أندرويد بصيغة APK. لا نستطيع معرفة متى يكتمل التحميل من هنا، فعندما يظهر في هاتفك أنه اكتمل اضغط «التالي».',
    images: [
      { file: 'step-01-download.png', caption: 'بدء التحميل في المتصفح' },
      { file: 'step-02-download-complete.png', caption: 'اكتمال التحميل' },
    ],
  },
  {
    id: 'd3', kind: 'card', illu: 'folder', title: 'افتح الملف من هاتفك',
    text: 'بعد اكتمال التحميل، افتح مجلد التنزيلات (Downloads) في هاتفك، ثم ابحث عن ملف NoorAlQuran.apk واضغط عليه.',
    images: [
      { file: 'step-03-open-downloads.png', caption: 'مجلد التنزيلات' },
      { file: 'step-04-select-apk.png', caption: 'اختر ملف NoorAlQuran.apk' },
    ],
  },
  {
    id: 'd4', kind: 'card', illu: 'install', title: 'ثبّت التطبيق',
    text: 'الآن اضغط على تثبيت (Install) وانتظر قليلاً حتى يتم تثبيت التطبيق على هاتفك.',
    note: 'إذا طلب أندرويد السماح بالتثبيت من هذا المصدر: اسمح بذلك للمتصفح الذي نزّلت منه الملف فقط، وبشرط أن تثق بمصدر التطبيق. وبعد الانتهاء عطّل هذا الإذن من جديد.',
    images: [{ file: 'step-05-install.png', caption: 'اضغط تثبيت' }],
  },
  {
    id: 'd5', kind: 'done', title: 'مبارك! أصبح تطبيق نور القرآن جاهزاً على هاتفك.',
    text: 'نتمنى لك رحلة إيمانية مليئة بالخير والطمأنينة.',
    images: [{ file: 'step-06-installed.png', caption: 'اكتمل التثبيت' }],
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
