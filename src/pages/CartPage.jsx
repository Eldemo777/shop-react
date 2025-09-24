import { Cart } from "../components/Cart"

export const CartPage = ({cartItems, onRemove}) => {
return (
    <div className="container ma-auto p-4">
        <Cart cartItems={cartItems} onRemove={onRemove} />
    </div>
)
}
