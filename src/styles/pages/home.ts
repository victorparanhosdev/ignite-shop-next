
import { styled } from '..';

export const HomeContainer= styled('main', {

    minHeight: '65.6rem',
    maxWidth: 'calc(100vw - ((100vw - 118rem)/2))',
    marginLeft: 'auto',

    '@media (max-width:500px)': {
        minHeight: '35.6rem',
        
    }

})

export const Product= styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    position: 'relative',
    borderRadius: 8,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 0,
    img: {
        
        objectFit: 'cover'
    },

    '@media (max-width:500px)': {
        img: {
            width: '100%',
            height: '100%',
        }
        
    },


    footer: {
        position: 'absolute',
        bottom: '0.4rem',
        left: '0.4rem',
        right: '0.4rem',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '3.2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,

        transform: 'translateY(120%)',
        transition: 'all 0.3s ease-in-out',
        opacity: 1,
        borderRadius: 6,
        color: '$gray300',
       

        strong: {
            fontSize: '2rem',
            display: 'block',
            marginBottom: '0.4rem',
        },

        span: {
            color: '$green300',
            fontWeight: 'bold',
            fontSize: '2.4rem',
            
        },
        
        button: {
            border: '0',
            display: 'flex',
            borderRadius: 6,
            cursor: 'pointer',
            background: '$green500',
            color: '$white',
            height: '5.6rem',
            minWidth: '5.6rem',
            padding: '1.2rem',
            justifyContent: 'center',
            alignItems: 'center',

            '&:hover': {
                transition: 'background 0.2s',
                background: '$green300'
            },

        }
    },

    
    '&:hover': {

        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
       
    },
})