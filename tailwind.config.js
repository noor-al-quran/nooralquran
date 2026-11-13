export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: { DEFAULT: '#0D5C3A', deep: '#063A23' },
        night: '#0A140F', card: '#11221A', glow: '#5AD89B',
        gold: { DEFAULT: '#D4AF37', light: '#F3CA52' }, cream: '#FAF7EE',
      },
      fontFamily: { cairo: ['Cairo', 'sans-serif'], amiri: ['Amiri', 'serif'] },
    },
  },
  plugins: [],
}
