import "./NavCheckout.css";

export default function NavCheckout({item, handleChangeQty}) {
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
                    {/* <button onClick={()=> handleChangeQty(item._id, item.qty - 1)}>-</button> */}
                    Qty: {item.qty}
                    {/* <button onClick={()=> handleChangeQty(item._id, item.qty + 1)}>+</button> */}
                    
                </div>
                <div>
                    {/* {console.log('EXTPRICE: '+item.item.extPrice)} */}
                    {/* ${item.item.price*item.qty} */}
                    {/* ${item.item.price.toFixed(2)}<br/> */}
                    ${item.extPrice.toFixed(2)}
                </div>
            </div>
        </div>
    )
}