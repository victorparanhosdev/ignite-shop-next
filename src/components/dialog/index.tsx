import * as Dialog from "@radix-ui/react-dialog";
import styled from './dialog.module.css'
import { Cross2Icon } from '@radix-ui/react-icons';

export function DialogBox() {
    function handleFinishCart(){
          // try {
  //   setLoading(true)
  //   const response = await axios.post('/api/checkout', {
  //     priceId: product.defaultPriceId,
  //   })
  //   const {checkoutUrl} = response.data
  //   window.location.href = checkoutUrl

  // }catch(error) {
  //   setLoading(false)
  //   alert('Erro ao direcionar checkout!')
  // }
    }


    return (
        <Dialog.Portal>
            <Dialog.Overlay className={styled.DialogOverlay} />
            <Dialog.Content className={styled.DialogContent}>
                <Dialog.Close asChild>
                    <button className={styled.IconButton} aria-label="Close">
                        <Cross2Icon width={24} height={24} />
                    </button>
                </Dialog.Close>

                <div className={styled.ContainerMenu}>
                    <Dialog.Title className={styled.DialogTitle}>Sacola de Compras</Dialog.Title>

                    <div className={styled.SelectCard}>

                        <div className={styled.CardItem}>
                            <div className={styled.CardImg}>
                                
                            </div>
                            <div className={styled.cardTitle}>
                                <h1>Camiseta Beyond the Limits</h1>
                                <strong>R$79,00 <span>x2</span></strong>
                                <button type="button">Remover</button>
                            </div>
                        </div>
                        <div className={styled.CardItem}>
                            <div className={styled.CardImg}>
                                
                            </div>
                            <div className={styled.cardTitle}>
                                <h1>Camiseta Beyond the Limits</h1>
                                <strong>R$79,00 <span>x2</span></strong>
                                <button type="button">Remover</button>
                            </div>
                        </div>

                        <div className={styled.CardItem}>
                            <div className={styled.CardImg}>
                                
                            </div>
                            <div className={styled.cardTitle}>
                                <h1>Camiseta Beyond the Limits</h1>
                                <strong>R$79,00 <span>x2</span></strong>
                                <button type="button">Remover</button>
                            </div>
                        </div>
                      
                    </div>

                    <div className={styled.CardInfo}>

                    </div>

                    <button className={styled.ButtonFinish} type="button">Finalizar compra</button>

                </div>
            </Dialog.Content>
        </Dialog.Portal>
    )
}