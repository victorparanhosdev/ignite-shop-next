import { styled } from '..';

export const HomeContainer= styled('main', {

    minHeight: '65.6rem',
    maxWidth: 'calc(100vw - ((100vw - 118rem)/2))',
    marginLeft: 'auto',

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



    img: {
        objectFit: 'cover',
        height: 'auto'
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

        }
    },

    
    '&:hover': {

        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
       
    },
})