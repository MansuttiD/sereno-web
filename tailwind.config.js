/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      xms: '500px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      sans: ['Poppins', 'san-serif'],
    },
    fontWeight: {
      black: 700,
      semibold: 600,
      medium: 500,
      normal: 400,
    },
    fontSize: {
      xs: '10px',
      sm: '12px',
      base: '15px',
      md: '20px',
      xl: '25px',
      '2xl': '35px',
      xxl: '50px'
    },
    lineHeight: {
      'leading-1': '15px',
      'leading-2': '18px',
      'leading-3': '37.5px',
      'leading-4': '52.5px',
    },
    extend: {
      colors: {
        blue_400: '#49A0F9',
        blue_500: '#1277DD',
        dark_blue: '#05103F',
        white: '#FFFFFF',
        black_footer: '#232233',
        general_backgound: '#FFFAFF'
      },
      boxShadow: {
        button: '0 10px 40px -15px RGBA(18, 119, 221, 0.7)',
        paymentbox: '0 10px 40px -15px rgba(14, 76, 139, 0.25)',
        faqbox: '0px 10px 40px -15px rgba(14, 76, 139, 0.25)',
      },
      backgroundImage: {
        'wavedownload': "url(/assets/img/home/wavedownload.svg)",
        'celphonetelegram': "url(/assets/img/home/jointelegram.svg)"
      }
    },
  },
};
