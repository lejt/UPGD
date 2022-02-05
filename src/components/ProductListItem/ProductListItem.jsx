import "./ProductListItem.css";

export default function ProductListItem({product}) {
    return (
        <div className="product_card">
            {product.title}<br/>
            {product.price}<br/>
            <img src={product.image} alt="" />
        </div>
    )
}