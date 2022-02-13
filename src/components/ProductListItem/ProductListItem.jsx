import "./ProductListItem.css";
import { Link } from "react-router-dom";

export default function ProductListItem({product, handleAddToOrder}) {
    
    // product price formatting from api, removing all characters besides number
    // and converts type string to float
    function findPeriodIdx(data) {
        return data.indexOf(".");
    }
    let periodIdx;
    let productPrice = (product.price.replace(',','')).trim();
    periodIdx = findPeriodIdx(productPrice);
    productPrice = parseFloat(productPrice.slice(1,periodIdx+3));
    
    return (
        <div className="product_list_item">
            <Link 
                to={`/products/${product.title.slice(0,20)}`} 
                state={{ dataToDetail: product }}
            >
                <div className="product_card">
                    <div>
                        <img src={product.image} alt="" /><br/><br/><br/>
                    </div>
                    <div className="product_card_desc">
                        <strong>{product.title}</strong><br/><br/>
                        ${productPrice.toFixed(2)}
                    </div>
                </div>
            </Link>
        </div>
    )
}