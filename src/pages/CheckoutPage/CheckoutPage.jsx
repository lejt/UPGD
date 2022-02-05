import "./CheckoutPage.css"

export default function CheckoutPage() {
    return (
        <div className="checkout">
            <aside className="checkout_payment">
                <h3>Payment Information here</h3>
            </aside>
            <aside className="checkout_cart">
                <h3>Cart and totals here</h3>
            </aside>
        </div>
    )
}