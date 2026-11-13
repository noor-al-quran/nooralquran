# نور القرآن | Noor Al-Qur'an — الموقع الرسمي

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide.

## التشغيل
```bash
npm install
npm run dev      # تشغيل محلي
npm run build    # بناء للإنتاج (مجلد dist)
npm run preview
```

## النشر على GitHub Pages
1. ارفع المشروع إلى مستودع على GitHub (الفرع `main`).
2. من Settings → Pages اختر Source: **GitHub Actions**.
3. أي push يبني ويُنشر تلقائياً عبر `.github/workflows/deploy.yml` (يأخذ اسم المستودع تلقائياً).
   للبناء المحلي بمسار مخصص: `VITE_BASE=/اسم-المستودع/ npm run build`.

## التعديل
- النصوص والمميزات والصور: `src/data.ts`
- الأقسام: `src/components/`
- الخصوصية: `src/components/PrivacyPage.tsx` (قالب قابل للتعديل)
- الصور في `public/images`

## لاحقاً
نظام التحميل (APK) غير مضاف عمداً؛ أضفه في المرحلة الثانية.
