import { styled } from "../../styles";

export const HomeHeader = styled("header", {
    padding: '2rem 1rem',
    width: 'min(95%, 118rem)',
    margin: '0 auto 3.2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:not(:has(button))': {
        justifyContent: 'center'
    },

    '> a': {
        cursor: 'pointer',
    },

    button: {
        border: '0',
        background: '$gray800',
        display: 'flex',
        borderRadius: 6,
        cursor: 'pointer',
        position: 'relative',
        height: '4.8rem',
        minWidth: '4.8rem',
        padding: '1.2rem',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'filter 0.2s',

        '&:hover': {
            filter: 'brightness(1.2)'
        },

        span: {
            position: 'absolute',
            minWidth: '2.4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '2.4rem',
            top: '-0.5rem',
            right: '-1rem',
            borderRadius: '50%',
            background: '$green300',
            outline: '2px solid black',
            color: '$white',
            fontSize: '1.4rem',
            fontWeight: 'bold',

        }
        
    },


})