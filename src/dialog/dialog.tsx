import * as Dialog from "@radix-ui/react-dialog";
import styled from './dialog.module.css'
import { Cross2Icon } from '@radix-ui/react-icons';

export function DialogBox() {
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
                    <Dialog.Title className="DialogTitle">Sacola de Compras</Dialog.Title>

                    <div>
                        camisas
                    </div>

                </div>
            </Dialog.Content>
        </Dialog.Portal>
    )
}