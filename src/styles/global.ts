import {globalCss} from '@/styles'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      },

      ':root': {
        fontSize: '62.5%',
      },
    
      body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$gray900',
        color: '$gray100',

      },
    
      'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '1.6rem',
      }


})

