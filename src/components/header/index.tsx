import LogoImg from '../../assets/logo.svg'
import Image from 'next/image'
import {Handbag} from '@phosphor-icons/react/dist/ssr/Handbag'

import { HomeHeader } from '@/components/header/header';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogBox } from '@/components/dialog';
import { useRouter } from 'next/router';


export function Header() {
    const {pathname} = useRouter()
    const {dataCart} = useCart()


  return (
 
      <HomeHeader>
        <Link href='/'><Image width={130} height={52} src={LogoImg.src} alt="" /></Link>

        {pathname !== '/success' && <Dialog.Trigger asChild>
        <button>
          <Handbag weight="bold" fill="#8D8D99" size={24} />
          <span>{dataCart.length}</span>
        </button>
        </Dialog.Trigger>}
        <DialogBox />



      </HomeHeader>

  );
}
