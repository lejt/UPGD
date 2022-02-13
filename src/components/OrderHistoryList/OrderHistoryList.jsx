import './OrderHistoryList.css';

export default function OrderHistoryList({order}) {

    function toDateString(text) {
        const d = new Date(text);
        let dateStr = d.toLocaleString();
        return dateStr;
    }

    return (
        <div className="order_history_list">
            <div className="order_info">
                <p>{toDateString(order.updatedAt)}</p>
                <p>Order ID: {order._id}</p>
            </div>

            <div className="order_detail">
                {order.lineItems.map(items => {
                        return (
                            <div className="order_items" style={order.lineItems.length > 1 ? {"borderBottom": "1px dashed gray"} : null}>
                                <div className="order_detail_item">
                                    <div className="order_detail_item_img_container">
                                        <img src={items.item.image} alt="" className="order_detail_item_img"/>   
                                    </div>
                                    <div className="order_detail_item_info">
                                        <h3 className="title is-5">{items.item.title}</h3>
                                        Qty: x{items.qty}
                                    </div>
                                </div>
                                <div className="order_detail_purchase">
                                    <p className="subtitle is-5">${items.item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="order_summary">
                <p className="title is-5">Order Total: ${order.orderTotal.toFixed(2)}</p>
            </div>
        </div>
    )
}