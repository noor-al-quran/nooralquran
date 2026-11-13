import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// عدّل القاعدة بسهولة: اسم المستودع على GitHub Pages، مثال: VITE_BASE=/اسم-المستودع/
// القيمة الافتراضية './' تعمل في أي مكان (روابط نسبية).
export default defineConfig({
  base: process.env.VITE_BASE || './',
  plugins: [react()],
})
