import "./ProductListItem.css";
import { Link } from "react-router-dom";

export default function ProductListItem({product, handleAddToOrder, handleAddMessage}) {
    return (
        <div className="product_list_item">
            <Link 
                to={`/products/${product.title.slice(0,20)}`} 
                state={{ dataToDetail: product }}
            >
                <div className="product_card">
                    <img src={product.image} alt="" />
                    {product.title}<br/><br/>
                    {product.price}<br/>
                </div>
            </Link>
            <div className="product_addToCart">
                {/* <button 
                    className="button is-warning"
                    onClick={()=> {
                        handleAddToOrder(product)
                        handleAddMessage()
                    }}
                >
                Add
                </button> */}
            </div>
        </div>
    )
}