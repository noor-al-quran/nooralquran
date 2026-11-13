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
