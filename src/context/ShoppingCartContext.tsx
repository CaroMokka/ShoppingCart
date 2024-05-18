import React from "react"
import { useState, createContext, useContext, ReactNode } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode
}
type ShoppingCartContext = {
    getItemsQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void 
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}
type CartItems = {
    id: number
    quantity: number
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [ cartItems, setCartItems ] = useState<CartItems[]>([])

    function getItemsQuantity(id: number) {
        return cartItems.find( item => item.id === id)?.quantity || 0
    }
    function increaseCartQuantity(id: number) {
        setCartItems( (currItems ) => {
            if(currItems.find(item => { item.id === id }) == null ){
                return [ ...currItems, { id, quantity: 1 } ]
            } else {
                return currItems.map( item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                } )
            }
        } )
    }

    return (
    <ShoppingCartContext.Provider value={{ getItemsQuantity, increaseCartQuantity }}>
        { children }
    </ShoppingCartContext.Provider>
    )
}