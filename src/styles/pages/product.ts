import { styled } from "..";


export const ProductHome = styled('div', {
    display: 'flex',
    gap: '7.2rem',
    maxWidth: '118rem',
    width: '95%',
    margin: '0 auto',
    '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        width: '100%',
      },
})

export const ImageContainer = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

})

export const DetailsContainer = styled('div', {

    display: 'flex',
    flexDirection: 'column',
    
    h1: {
        fontSize: '3.2rem',
        color: '$gray300',
        lineHeight: '140%',
        marginBottom: '1.6rem',


    },
    span: {
        color: '$green300',
        fontSize: '3.2rem',
        marginBottom: '4rem',
        lineHeight: '140%',

    },
    p: {
        fontSize: '1.8rem',
        color: '$gray300',
        lineHeight: '160%',
        textAlign: 'justify',
        marginBottom: '1.5rem'

    },

    button: {
        marginTop: 'auto',
        borderRadius: 8,
        backgroundColor: '$green300',
        border: 0,
        cursor: 'pointer',
        height: '6.9rem',
        color: '$white',
        fontWeight: 'bold',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',

        },

        '&:not(:disabled):hover': {
            transition: 'filter 0.4s',
            filter: 'brightness(0.8)',
        }

    }



})