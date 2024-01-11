import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";


interface ContextProps {
    children: React.ReactNode
}
const CartContext = createContext({} as PropsCart)


interface PropsCart {
    setdataCart: Dispatch<SetStateAction<string[]>>,
    dataCart: string[]
}

function CartProvider({children}: ContextProps){
    const [dataCart, setdataCart] = useState<string[]>([])


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