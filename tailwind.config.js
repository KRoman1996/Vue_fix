module.exports = {
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  theme: {
    extend: {
        fontFamily: {
        titilium: ['Titillium Web','sans', 'sans-serif'],
         openSans:['Open Sans',  'sans', 'sans-serif']
      },
         backgroundImage: {
           'hero-image': "url('~/assets/images/heroDesktop.png')",
           'hero-mobile': "url('~/assets/images/heroMobile.png')",
           'rectangle': "url('~/assets/images/rectangle.png')",
           'tradenowmob': "url('~/assets/images/tradenowmob.png')",
           'takeMarket': "url('~/assets/images/takeTheMarket.png')",
           'background': "url('~/assets/images/background.png')",
           'callCenter': "url('~/assets/images/SmilingCallCenter.png')",
           'frameBackground': "url('~/assets/images/FrameBackground.png')",
           'takeMarketMob': "url('~/assets/images/takeMarketMob.png')",
           'steps': "url('~/assets/images/steps.png')",
           'accountFunding': "url('~/assets/images/accountFunding.png')",
          'about': "url('~/assets/images/AboutUs.png')",
      },
      height: {
          about: "425px",
          live: '472px',
            hero: '733px',
            footer: '520px;',
            footerMob: '840px',
            account: '1300px',
           accountMobile: '2500px'
          
      },
        width: {
          trade: "420px",
          
          
        },
      colors: {
        backgroundColor: '#202124',
        do: '#847AAE',
        we: '#5194B1',
        what:'#907BE8'
      },
      boxShadow: {
        blue: '2px 2px 2px 0 rgb(144, 123, 232)',
      },
    },
  },
  variants: {},
  plugins: [],
}
