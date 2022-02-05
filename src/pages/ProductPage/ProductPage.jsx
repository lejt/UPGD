import "./ProductPage.css";
import { useState, useEffect } from 'react';
// import * as productsAPI from "../../utilities/product-api"; 
import * as itemsAPI from '../../utilities/items-api';
import ProductList from "../../components/ProductList/ProductList";

export default function Product() {
    const [products, setProducts] = useState([])

    useEffect(function() {
        async function getProducts() {
            const items = await itemsAPI.getAll();
            // console.log(items.products);
            // console.log(Object.values(items.products))
            setProducts(Object.values(items.products));
        }
        getProducts();

    },[]);
    
    return (
        <div className="products">
            <div className="products_banner">
                <h1>All Products</h1>
            </div>
            <div className="products_header">
                <h3># of Items</h3>
                <h3>Sort By</h3>
            </div>

            <div className="products_display">
                <aside className="products_categories">
                    <h2>Product categories</h2>
                </aside>
                <aside className="products">
                    {/* {console.log(products.products)} */}
                    {/* {products.products.forEach(p=>console.log(p.title))} */}
                    <ProductList products={products}/>
                </aside>
            </div>
        </div>
    )
}