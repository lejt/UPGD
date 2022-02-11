import './PaymentCompleteItems.css';

export default function PaymentCompleteItems({items}) {
    return (
        <div>
            <h1>hi</h1>
            {items.item.title}
            <p>Order Quantity: x{items.qty}</p>
            {items.item.price}
            
            {/* {items.qty} */}
            {/* items map item.title item.price */}
            {/* {items.map(item => {
                return (
                    <>
                        <p>{item.item.title}</p>
                        <p>{item.item.price}</p>
                    </>
                )
                })
            } */}
            
        </div>
    )
}