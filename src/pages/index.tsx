import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import camisa2 from '../../public/assets/camisa2.png'
import camisa3 from '../../public/assets/camisa3.png'
import camisa4 from '../../public/assets/camisa4.png'
import camisa5 from '../../public/assets/camisa5.png'
import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

export default function Home() {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })


  return (
    <HomeContainer ref={slideRef} className="keen-slider">
      <Product className="keen-slider__slide number-slide1">
        <Image width={520} height={480} src={camisa2.src} alt="" />
        <div>
          <strong>Camisa Beyond the Limits</strong>
          <span>R$ 49,90</span>
        </div>
      </Product>
      <Product className="keen-slider__slide number-slide2">
        <Image width={520} height={480} src={camisa3.src} alt="" />
        <div>
          <strong>Camisa Beyond the Limits</strong>
          <span>R$ 49,90</span>
        </div>
      </Product>
      <Product className="keen-slider__slide number-slide3">
        <Image width={520} height={480} src={camisa4.src} alt="" />
        <div>
          <strong>Camisa Beyond the Limits</strong>
          <span>R$ 49,90</span>
        </div>
      </Product>
      <Product className="keen-slider__slide number-slide4">
        <Image width={520} height={480} src={camisa5.src} alt="" />
        <div>
          <strong>Camisa Beyond the Limits</strong>
          <span>R$ 49,90</span>
        </div>
      </Product>   
    </HomeContainer>  
  )
}
