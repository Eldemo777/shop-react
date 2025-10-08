import { Cart } from "../components/Cart"

export const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
return (
    <div className="container ma-auto p-4">
        <Cart cartItems={cartItems}
         onUpdateQuantity={onUpdateQuantity}
         onRemoveItem={onRemoveItem}
         />
    </div>
)
}

