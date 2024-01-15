import * as Dialog from "@radix-ui/react-dialog";
import styled from './dialog.module.css'
import { Cross2Icon } from '@radix-ui/react-icons';
import { useState } from "react";
import axios from "axios";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { ProductProps } from "@/hooks/useCart";
import {SmileyXEyes} from '@phosphor-icons/react'
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface PropsState {
    QuantityItem: number;
    Total: number;
}
 
export function DialogBox() {
    const router = useRouter()

    const { dataCart, setdataCart } = useCart()
    const [isLoading, setLoading] = useState(false)

    const cart = dataCart.map(item =>{
        return {
            price: item.defaultPriceId,
            quantity: item.quantity
        }
        
    })


    const valorTotal = dataCart.reduce((acc: PropsState, product: ProductProps) => {

        const valorNumerico = product.price.replace("R$", "").replace(",", ".");
        const valorConvertido = parseFloat(valorNumerico);
        const valorForProduct = valorConvertido * product.quantity

        return {
            QuantityItem: acc.QuantityItem + product.quantity, // Exemplo de manipulação do estado
            Total: acc.Total + valorForProduct // Acumula o valor convertido ao total
        };

    }, {
        QuantityItem: 0,
        Total: 0
    });

    const totalListValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorTotal.Total)

    function removeItem(product: ProductProps) {
        setdataCart(prevState => {
            return prevState.filter(removeItem => removeItem.id !== product.id)
        })
        toast.error(`${product.name} Removido(a)`, {
            theme: 'dark',
            autoClose: 500,
            pauseOnHover: false,
        })

    }

    async function handleFinishCart() {
        try {
            setLoading(true)
            const response = await axios.post('/api/checkout', {
                product: cart
            })
            const { checkoutUrl } = response.data
            router.push(checkoutUrl)
            //window.location.href = checkoutUrl

        } catch (error) {
            setLoading(false)
            console.log(error)
            console.log(error.response.data)
            alert('Erro ao direcionar checkout!')
        }
    }


    return (
        <Dialog.Portal>
            <Dialog.Overlay className={styled.DialogOverlay}/>
            <Dialog.Content className={styled.DialogContent}>
                <Dialog.Close asChild>
                    <button className={styled.IconButton} aria-label="Close">
                        <Cross2Icon width={24} height={24} />
                    </button>
                </Dialog.Close>

                <div className={styled.ContainerMenu}>
                    <Dialog.Title className={styled.DialogTitle}>Sacola de Compras</Dialog.Title>

                    <div className={styled.SelectCard}>

                        {
                            dataCart.length > 0 ? dataCart.map(product => {
                                return (
                                    <div key={product.id} className={styled.CardItem}>
                                        <div className={styled.CardImg}>
                                            <Image height={95} width={95} src={product.imageUrl} alt="" />
                                        </div>
                                        <div className={styled.cardTitle}>
                                            <h1>{product.name}</h1>
                                            <strong>{product.price} <span>x{product.quantity}</span></strong>
                                            <button onClick={() => removeItem(product)} type="button">Remover</button>
                                        </div>
                                    </div>
                                )
                            }) : <div className={styled.CartEmpty}>

                                <div><SmileyXEyes size={200} /></div>
                                <h1>Não há itens no seu carinho de compras</h1>


                            </div>
                        }


                    </div>

                        <div style={{marginTop: 'auto'}}>

                    <div className={styled.CardInfo}>
                        <div>
                            <span>Quantidade</span>
                            <span style={{ fontSize: '1.8rem', lineHeight: '160%' }}>{valorTotal.Total === 0 ? '0' : `${valorTotal.QuantityItem} Item(s)`}</span>
                        </div>
                        <div>
                            <strong style={{ fontSize: '1.8rem' }}>Valor Total</strong>
                            <strong className={styled.price}>{totalListValue}</strong>
                        </div>
                    </div>

                    <button disabled={dataCart.length === 0 || isLoading} onClick={handleFinishCart} className={styled.ButtonFinish} type="button">Finalizar compra</button>
                        </div>


                </div>
            </Dialog.Content>
        </Dialog.Portal>
    )
}