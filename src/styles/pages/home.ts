import { styled } from '..';

export const HomeContainer= styled('main', {

    minHeight: '65.6rem',
    maxWidth: 'calc(100vw - ((100vw - 118rem)/2))',
    marginLeft: 'auto',

})

export const Product= styled('a', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    width: '69.6rem',
    position: 'relative',
    borderRadius: 8,
    cursor: 'pointer',



    img: {
        objectFit: 'cover',
        width: '100%',
    },

    '&:hover div': {
        transform: 'translateY(0%)',
        opacity: 1,
    },

    div: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '$gray800',
        padding: '3.2rem 4rem 3.2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        transform: 'translateY(120%)',
        transition: 'transform 0.4s, opacity 0.4s',
        opacity: 0,
        borderRadius: 6,

       

        strong: {
            fontSize: '2rem'
        },

        span: {
            color: '$green300',
            fontWeight: 'bold',
            fontSize: '2.4rem'
        }
    }
})