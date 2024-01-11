import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

export interface ProductProps {
 
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    quantity: number
}


interface ContextProps {
    children: React.ReactNode
}
const CartContext = createContext({} as PropsCart)


interface PropsCart {
    setdataCart: Dispatch<SetStateAction<ProductProps[]>>,
    dataCart: ProductProps[]
}

function CartProvider({children}: ContextProps){
    const [dataCart, setdataCart] = useState<ProductProps[]>([])


    return(
        <CartContext.Provider value={{setdataCart, dataCart}}>
            {children}
        </CartContext.Provider>
    )
}


function useCart(){
    const context = useContext(CartContext)
    return context

}

export {CartProvider, useCart}