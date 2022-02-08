import "./ProductListItem.css";
import { Link } from "react-router-dom";

export default function ProductListItem({product, handleAddToOrder}) {
    return (
        <div className="product_list_item">
            <Link 
                to={`/products/${product.title.slice(0,20)}`} 
                state={{ dataToDetail: product }}
            >
                <div className="product_card">
                    {product.title}<br/>
                    {product.price}<br/>
                    <img src={product.image} alt="" />
                </div>
            </Link>
            <div className="product_addToCart">
                <button 
                    className="button is-warning"
                    onClick={()=> handleAddToOrder(product)}
                >
                Add
                </button>
            </div>
        </div>
    )
}