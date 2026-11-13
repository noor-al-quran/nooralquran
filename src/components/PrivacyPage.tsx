import { ArrowRight } from 'lucide-react'

// قالب قابل للتعديل: استبدل النص أدناه بسياسة الخصوصية المعتمدة لاحقاً.
const BLOCKS = [
  { h: 'مقدمة', p: 'تهتم نور القرآن بخصوصية مستخدميها. هذه الصفحة قالب أولي سيُستكمل بالتفاصيل الدقيقة عن التطبيق.' },
  { h: 'البيانات التي يتعامل معها التطبيق', p: 'سيتم هنا توضيح أنواع البيانات (إن وجدت) بعد مراجعتها وتأكيدها من المطور.' },
  { h: 'كيفية الاستخدام والتخزين', p: 'سيُضاف هنا شرح لكيفية استخدام البيانات وتخزينها بعد اعتماد الصياغة النهائية.' },
  { h: 'التواصل', p: 'ستُضاف وسيلة التواصل الرسمية لاحقاً.' },
]

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-16">
      <a href="#top" className="mb-8 inline-flex items-center gap-2 text-gold-light hover:underline"><ArrowRight size={18} /> العودة إلى الموقع</a>
      <h1 className="gold-text text-4xl font-extrabold">سياسة الخصوصية</h1>
      <p className="mt-2 text-cream/50">نور القرآن · Noor Al-Qur'an</p>
      <div className="mt-10 space-y-8">
        {BLOCKS.map(b => <section key={b.h}><h2 className="mb-2 text-xl font-bold text-gold-light">{b.h}</h2><p className="leading-loose text-cream/75">{b.p}</p></section>)}
      </div>
    </main>
  )
}
