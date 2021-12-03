module.exports = {
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: [
      './apps/web/**/*.{jsx,tsx}',
    ],
  },
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ],
};
