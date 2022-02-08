import "./LineItem.css";

export default function LineItem({item}) {
    return (
        <div className="cart_info">
            <div className="cart_item">
                {item.item.title}
            </div>
            <div className="cart_item_price">
                {item.item.price}
            </div>
        </div>
    )
}