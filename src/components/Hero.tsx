import { motion } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'
import { Phone, Stars, Crescent, Lantern, Skyline } from './ui'
import { img } from '../data'

const APK_URL = 'https://github.com/noor-al-quran/nooralquran/releases/latest/download/NoorAlQuran.apk'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-32 pattern">
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald/40 blur-[120px]" />
      <Stars />
      <Crescent className="floaty absolute left-6 top-24 hidden h-16 w-16 text-gold/30 md:block" />
      <Lantern className="floaty absolute right-8 top-20 hidden h-28 text-gold/30 md:block" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-right">
          <img src={img('logo.jpg')} alt="شعار نور القرآن" width={96} height={96} className="floaty mx-auto h-24 w-24 rounded-3xl border-2 border-gold/60 object-cover shadow-[0_0_40px_rgba(212,175,55,.3)] lg:mx-0" />
          <p className="mt-6 font-amiri text-xl text-gold-light">السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ</p>
          <h1 className="mt-2 text-lg font-semibold text-glow">نور القرآن · Noor Al-Qur'an</h1>
          <h2 className="mt-4 text-4xl font-extrabold leading-snug md:text-5xl">رفيقك اليومي في رحلتك مع <span className="gold-text">القرآن الكريم</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-loose text-cream/75 lg:mx-0">تجربة إسلامية متكاملة تجمع القرآن الكريم والأذكار ومواقيت الصلاة واتجاه القبلة والمزيد، في تطبيق واحد صُمم ليكون رفيقك في يومك.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href={APK_URL} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-light px-8 py-3 font-bold text-emerald-deep shadow-lg transition hover:scale-105"><Download size={18} /> تحميل التطبيق</a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-gold px-8 py-3 font-bold text-gold-light transition hover:bg-gold hover:text-emerald-deep">اكتشف التطبيق <ChevronDown size={18} /></a>
            <a href="#/gallery" className="inline-flex items-center rounded-full border border-gold px-8 py-3 font-bold text-gold-light transition hover:bg-gold hover:text-emerald-deep">معرض الصور</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <Phone file="shots/01-home.jpg" className="floaty" />
        </motion.div>
      </div>
      <Skyline className="absolute inset-x-0 bottom-0 h-12 w-full text-emerald-deep/70" />
