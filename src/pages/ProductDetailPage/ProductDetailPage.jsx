import "./ProductDetailPage.css";
import { useParams, useLocation } from "react-router-dom";

export default function ProductDetailPage() {
    const { productName } = useParams();
    const { state } = useLocation();
    
    return (
        <div>
            <h1>Product Details</h1>
            {{state}.state.product.product.link}
        </div>
    )
}