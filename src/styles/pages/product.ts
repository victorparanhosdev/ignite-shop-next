import { styled } from "..";


export const ProductHome = styled('div', {
    display: 'flex',
    gap: '7.2rem',
    maxWidth: '118rem',
    width: '95%',
    margin: '0 auto 5rem',

    '@media (max-width: 1000px)': {
        gap: '3rem'
    },
    

    '@media (max-width: 900px)': {
        display: 'grid'
    },
    
 
})

export const ImageContainer = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    height: '65.6rem',
    minWidth: '57.6rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    img: {
      
        height: '100%',
        objectFit: 'cover'
    },


    '@media (max-width:1130px)': {
        minWidth: 'auto',
    },

    '@media (max-width: 900px)': {
        height: 'auto',
    
    },
    '@media (max-width: 600px)': {
        img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },
    
    }

 
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