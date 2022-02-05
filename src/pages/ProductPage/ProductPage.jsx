import "./ProductPage.css";

export default function Product() {
    return (
        <div className="product">
            <div className="product_banner">
                <h1>All Products</h1>
            </div>
            <div className="product_header">
                <h3># of Items</h3>
                <h3>Sort By</h3>
            </div>

            <div className="product_list">
                <aside className="product_categories">

                </aside>
                <aside className="products">

                </aside>
            </div>
        </div>
    )
}