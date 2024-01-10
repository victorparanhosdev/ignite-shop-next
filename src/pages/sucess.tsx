import {ImageContainer, SuccessContainer} from '../styles/pages/sucess'
import Link from 'next/link'

export default function Sucess() {
    return (
      <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
    )
  }