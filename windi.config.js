import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    exclude: ['node_modules', '.git'],
  },
  shortcuts: {
    'icon-svg': 'inline-block leading-0'
  },
  theme: {
    extend: {
      colors: {
        primary: {
          '400': '#24B1E6',
        }, // primary-color from design
        heading:{
            'md':'#404040',
        },
        content:{
            'sm':'#7D8088',
            'red':'#DC3C3C'
        },
        viewMore:{
            'md':'#18FF43'
        },
        price:{
            'gray':'#7D8088'
        }

      },
 
      fontFamily: {
        sansPro :['Source Sans Pro', 'sans-serif'],
        barlow:[ 'Barlow','sans-serif']
     
      }, // custom font from design
      container: {
        center: true,
        padding: '0.9375rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1240px',
        },
      },
   
    }
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/aspect-ratio'),
  
  ],
})
