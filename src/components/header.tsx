import LogoImg from '../../public/logo.svg'
import Image from 'next/image'
import {Handbag } from '@phosphor-icons/react';
import { HomeHeader } from '@/styles/components/header';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import styled from './header.module.css'
export function Header() {

    const {dataCart} = useCart()
  

  return (
 
      <HomeHeader>
        <Link href='/'><Image width={130} height={52} src={LogoImg.src} alt="" /></Link>

        <Dialog.Trigger asChild>
        <button>
          <Handbag weight="bold" fill="#8D8D99" size={24} />
          <span>{dataCart.length}</span>
        </button>
        </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className={styled.DialogOverlay} />
      <Dialog.Content className={styled.DialogContent}>
      <Dialog.Close asChild>
          <button className={styled.IconButton} aria-label="Close">
            <Cross2Icon width={24} height={24}/>
          </button>
      </Dialog.Close>

        <div className={styled.ContainerMenu}>
        <Dialog.Title className="DialogTitle">Sacola de Compras</Dialog.Title>

        <div>
          camisas
        </div>


        </div>
 

  





      </Dialog.Content>
    </Dialog.Portal>


      </HomeHeader>

  );
}
