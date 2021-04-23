module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandcolor: '#017143',
        btncolor: '#659024',
        thirdsection: '#EBEBEB',
        starbucktext: {
          100: '#DFDFDF',
          200: '#36443E',
          300: '#0A1B14',
          400: '#56625D',
        }
      },
      fontFamily: {
        body: ['Poppins']
      },
      spacing: {
        '98': '28rem',
        '100': '30rem',
      },
      fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
