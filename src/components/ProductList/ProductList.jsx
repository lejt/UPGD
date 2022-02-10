import "./ProductList.css";
import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList({products, setCart, handleAddToOrder, handleAddMessage}) {

    return (
        <div className="products_grid">
            {products.map((p, idx)=> <ProductListItem 
                                        product={p} 
                                        key={idx} 
                                        handleAddToOrder={handleAddToOrder}
                                        handleAddMessage={handleAddMessage}
                                    />
            )}
        </div>
    )
}