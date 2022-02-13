import "./NavCheckout.css";

export default function NavCheckout({item, handleChangeQty, handleDeleteItem}) {
    return (
        <div className="navbar_checkout_dropdown_items">
            <div className="navbar_checkout_dropdown_imgntitle">
                <div className="navbar_checkout_dropdown_img">
                    <img src={item.item.image} alt=""/>
                </div>
                <div className="navbar_checkout_dropdown_title">
                    <p>{item.item.title}</p>
                </div>
            </div>

            <div className="navbar_checkout_dropdown_pricenqty">
                <div>
                    <span>Qty: </span>
                    <select value={item.qty} onChange={(evt)=> handleChangeQty(item._id, evt.target.value)} >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div>
                    ${item.extPrice.toFixed(2)}
                </div>
            </div>

            <div className="navbar_remove_item">
                <button className="button is-danger is-inverted is-small" onClick={()=> handleDeleteItem(item._id)}>Remove Item</button>
            </div>
        </div>
    )
}