export default {
  content: ["./index.html",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: { 
          950: '#0A0F14', 
          900: '#0F1419', 
          800: '#1A1F2E'
        },
        iuptec: { 
          orange: '#FDB913', 
          teal: '#2DD4BF', 
          blue: '#003D5C'
        }
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(253, 185, 19, 0.3)',
        'glow-teal': '0 0 20px rgba(45, 212, 191, 0.3)',
      }
    }
  }
}