import "./ProductListItem.css";
import { Link } from "react-router-dom";

export default function ProductListItem({product}) {
    return (
        <Link to={`/products/${product.title.slice(0,20)}`} state={{product:{product}}}>
            <div className="product_card">
                {product.title}<br/>
                {product.price}<br/>
                <img src={product.image} alt="" />
            </div>
        </Link>
    )
}