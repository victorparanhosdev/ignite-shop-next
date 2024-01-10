import { styled } from "..";


export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: '65.6rem',
  
    h1: {
      fontSize: '3.2rem',
      color: '$gray100',
    },
  
    p: {
      fontSize: '2.4rem',
      color: '$gray300',
      maxWidth: '56rem',
      textAlign: 'center',
      marginTop: '3.2rem',
      lineHeight: 1.4,
    },
  
    a: {
      display: 'block',
      marginTop: '8.8rem',
      fontSize: '2rem',
      color: '$green500',
      textDecoration: 'none',
      fontWeight: 'bold',
  
      '&:hover': {
        color: '$green300',
      }
    }
  });

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: '13rem',
    height: '14.5rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '1rem',
    marginTop: '6.4rem',
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
  
    img: {
      objectFit: 'cover',
    }
  });