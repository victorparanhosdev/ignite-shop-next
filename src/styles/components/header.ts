import { styled } from "..";

export const HomeHeader = styled("header", {
    padding: '2rem 0',
    width: 'min(95%, 118rem)',
    margin: '0 auto 3.2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

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
            border: '2px solid black',
            color: '$white',
            fontSize: '1.4rem',
            fontWeight: 'bold',

        }
        
    },


})