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
                    {/* <button onClick={()=> handleChangeQty(item._id, item.qty - 1)}>-</button> */}
                    Qty: 
                    {/* {item.qty}
                    <input 
                        disabled
                        type="number" 
                        name="itemQty" 
                        value={item.qty} 
                        onChange={()=> {

                            handleChangeQty(item._id, item.qty + 1)
                        
                        }} 
                    /> */}
                    <select value={item.qty} onChange={(evt)=> handleChangeQty(item._id, evt.target.value)} >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    {/* <button onClick={()=> handleChangeQty(item._id, item.qty + 1)}>+</button> */}
                    
                </div>
                <div>
                    {/* {console.log('EXTPRICE: '+item.item.extPrice)} */}
                    {/* ${item.item.price*item.qty} */}
                    {/* ${item.item.price.toFixed(2)}<br/> */}
                    ${item.extPrice.toFixed(2)}
                </div>
            </div>
            <div>
                <button className="button is-danger is-inverted" onClick={()=> handleDeleteItem(item._id)}>Remove Item</button>
            </div>
        </div>
    )
}