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
      },
      
      '&::-webkit-scrollbar-thumb': {
        background: '$green500',
        borderRadius: '5rem',
        transition: 'background 0.3s',
        '&:hover':{
          background:'$green300',
        }
      },
    
      '&::-webkit-scrollbar': {
        background: 'transparent',
        width: '0.7rem',
        height: '0.7rem',
      },
      

})

