import './PaymentCompleteItems.css';

export default function PaymentCompleteItems({items}) {
    return (
            <div className="receipt_item">
                <div className="receipt_imgntitle">
                    <div className="receipt_left_image">
                        <img src={items.item.image} alt="" className="receipt_image" />
                    </div>
                    <div className="receipt_left_info">
                        <p>{items.item.title}</p>
                        <p>x{items.qty}</p>
                    </div>
                </div>
                <div className="receipt_unit_price">
                    <p>${items.item.price.toFixed(2)}</p>
                </div>    
            </div>
      
    )
}