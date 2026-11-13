import { BookOpen, Headphones, Heart, Clock, Compass, CircleDot, Sparkles, ScrollText, CalendarDays, Bot } from 'lucide-react'

export const img = (n: string) => `${import.meta.env.BASE_URL}images/${n}`

export const NAV = [
  { id: 'about', label: 'عن التطبيق' },
  { id: 'features', label: 'المميزات' },
  { id: 'gallery', label: 'الصور' },
  { id: 'quran', label: 'القرآن' },
  { id: 'assistant', label: 'المساعد' },
  { id: 'adhkar', label: 'الأذكار والصلاة' },
  { id: 'privacy', label: 'الخصوصية' },
  { id: 'developer', label: 'المطور' },
]

export const FEATURES = [
  { icon: BookOpen, title: 'القرآن الكريم', text: '114 سورة و30 جزءاً بين يديك في أي وقت.' },
  { icon: Headphones, title: 'التلاوات القرآنية', text: 'استمع إلى ثمانية من القراء المشهورين.' },
  { icon: Heart, title: 'الأذكار اليومية', text: 'أذكار الصباح والمساء وبعد الصلاة والنوم والاستيقاظ.' },
  { icon: Clock, title: 'مواقيت الصلاة', text: 'الأوقات اليومية مع العد التنازلي للصلاة القادمة.' },
  { icon: Compass, title: 'اتجاه القبلة', text: 'بوصلة إلكترونية تدلّك على اتجاه الكعبة المشرفة.' },
  { icon: CircleDot, title: 'المسبحة الإلكترونية', text: 'عداد تسبيح وأهداف قابلة للتخصيص.' },
  { icon: Sparkles, title: 'أسماء الله الحسنى', text: '99 اسماً مع شرح معانيها.' },
  { icon: ScrollText, title: 'موسوعة الحديث الشريف', text: 'دواوين الحديث السبعة في موسوعة واحدة.' },
  { icon: CalendarDays, title: 'التقويم الهجري', text: 'التاريخ الهجري والمناسبات والشهور.' },
  { icon: Bot, title: 'المساعد الإسلامي الذكي', text: 'يجيب عن أسئلتك في القرآن والحديث والأذكار.' },
]

export const SHOTS = [
  { id: 'home', title: 'الشاشة الرئيسية', file: 'home.jpg' },
  { id: 'services', title: 'الخدمات الإسلامية', file: 'services.jpg' },
  { id: 'mushaf', title: 'فهرس المصحف', file: 'mushaf.jpg' },
  { id: 'adhkar', title: 'الأذكار', file: 'adhkar.jpg' },
  { id: 'prayer', title: 'مواقيت الصلاة', file: 'prayer.jpg' },
  { id: 'qibla', title: 'اتجاه القبلة', file: 'qibla.jpg' },
  { id: 'assistant', title: 'المساعد الإسلامي الذكي', file: 'assistant.jpg' },
]
