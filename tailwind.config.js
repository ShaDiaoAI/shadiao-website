/** @type {import('tailwindcss').Config} */
//
// 官网 Tailwind 配置。
//
// 历史上用的是 cdn.tailwindcss.com（Play CDN），实测国内响应约 8 秒且是渲染阻塞资源，
// 严重影响首屏与搜索引擎抓取体验。改为本地构建后，只需要在改动 index.html 后重新执行：
//
//   bash build-css.sh
//
// 生成物 tailwind.css 需要和 index.html 一起部署（deploy.sh 已包含）。
//
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  // index.html 里稀有度过滤按钮的 class 是运行时用字符串拼出来的，
  // Tailwind 的静态扫描虽然能匹配到源码里的字面量，但这里显式列出以防构建工具换版后失效。
  safelist: [
    'bg-white/10',
    'border-white/20',
    'text-[#fafafa]',
    'bg-[#34d399]/15',
    'border-[#34d399]/50',
    'text-[#34d399]',
    'bg-[#60a5fa]/15',
    'border-[#60a5fa]/50',
    'text-[#60a5fa]',
    'bg-[#c084fc]/15',
    'border-[#c084fc]/50',
    'text-[#c084fc]',
    'bg-[#fbbf24]/15',
    'border-[#fbbf24]/50',
    'text-[#fbbf24]',
    'border-[#34d399]/30',
    'border-[#60a5fa]/30',
    'border-[#c084fc]/30',
    'border-[#fbbf24]/30',
    'text-[#a3a3a3]',
    'hover:border-[#34d399]/60',
    'hover:border-[#60a5fa]/60',
    'hover:border-[#c084fc]/60',
    'hover:border-[#fbbf24]/60',
    'hover:border-white/40',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'PingFang SC', 'Microsoft YaHei', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface:   '#121212',
        elevated:  '#1a1a1a',
        card:      '#212121',
        border:    '#383838',
        muted:     '#a3a3a3',
        foreground:'#fafafa',
        'rarity-common':    '#34d399',
        'rarity-rare':      '#60a5fa',
        'rarity-epic':      '#c084fc',
        'rarity-legendary': '#fbbf24',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(168,85,247,0.15), 0 0 40px rgba(168,85,247,0.05)' },
          '50%':     { boxShadow: '0 0 30px rgba(168,85,247,0.3), 0 0 60px rgba(168,85,247,0.12)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
