/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "hero": "url('/images/watermark.jpg')",
      },
      boxShadow: {
        card: "0px 10px 50px -15px #00FFFF",
        card2: "0px 35px 90px -35px #1f1f1f",
      },
      screens: {
        'res1': '400px',
        // => @media (min-width: 640px) { ... }
        'res2': '500px',
        'res3': '800px',
  
        'lp': '1100px',
        // => @media (min-width: 1024px) { ... }
  
        'dp': '1370px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
