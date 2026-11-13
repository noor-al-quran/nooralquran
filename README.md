# نور القرآن | Noor Al-Qur'an — الموقع الرسمي

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide.

## التشغيل
```bash
npm install
npm run dev
npm run build
```

## الصفحات
التنقل بالهاش (يعمل على GitHub Pages دون إعدادات): `#/quran` `#/reciters` `#/adhkar` `#/prayer` `#/qibla` `#/tasbih` `#/names` `#/hadith` `#/assistant` `#/calendar` `#/offline` `#/about` `#/gallery` `#/privacy` `#/developer`.

## التعديل
- نصوص الصفحات وصورها: `src/data.ts` (`PAGES` و`SHOTS`)
- فهرس اللقطات: `SCREENSHOTS_CATALOG.md`
- الصور المحسّنة: `public/images/shots/`

## النشر
GitHub Pages ← Source: GitHub Actions، ثم ملف `.github/workflows/pages-deploy.yml` (يأخذ اسم المستودع تلقائياً). لا يوجد نظام تحميل APK في هذه النسخة.
