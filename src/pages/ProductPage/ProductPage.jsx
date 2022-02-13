import "./ProductPage.css";
import { useState, useEffect } from 'react';
import * as ordersAPI from "../../utilities/orders-api"; 
import * as itemsAPI from '../../utilities/items-api';
import ProductList from "../../components/ProductList/ProductList";
import CategoryList from "../../components/CategoryList/CategoryList";

import SearchIcon from '@mui/icons-material/Search';

export default function ProductPage({pageCategory, cart, setCart, handleAddToOrder}) {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    

    let getProduct;
    switch (pageCategory) {
        case "all Products":
            getProduct = 'all';
            break;
        case "peripherals":
            getProduct = "peripheral"
            break;
        case "accessories":
            getProduct = "accessory"
            break;
    }

    useEffect(function() {
        async function getProducts() {
            const items = await itemsAPI.getAll(getProduct);
            // console.log(items.products);
            // console.log(Object.values(items.products))
            // console.log(items.products)
            setProducts(Object.values(items.products));
        }
        getProducts();

        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
            // updateCart(cart);
        }
        getCart();

        
    },[pageCategory]);

  


    // useEffect(()=> {
    //     setTimeout(()=> {
    //         setVisible(false);
    //     }, props.delay);
    // }, [props.delay]);

    // useEffect(function() {
    //     // if (!cart) return null;
    //     async function getCart() {
    //         const cart = await ordersAPI.getCart();
    //         setCart(cart);
    //         // updateCart(cart);
    //     }
    //     getCart();
    // });
    
    function handleChange(evt) {
        setSearchQuery(evt.target.value);
    }

    async function searchProducts(searchQuery) {
        const items = await itemsAPI.getAll(searchQuery);
        setProducts(Object.values(items.products));
    }



    return (
        <div className="products">

            <div className="products_banner">
                <h1>{pageCategory.toUpperCase()}</h1>
            </div>
            <div className="products_header">
                <h3>{products.length} Items</h3>
                <div className="products_header_right">
                    <div className="products_searchBar">
                        <div>
                            <input className="products_searchInput" type="text" name="search" value={searchQuery} onChange={handleChange} placeholder="Look up products"/>
                        </div>
                        <div>
                            <button onClick={()=> searchProducts(searchQuery)}><SearchIcon/></button>
                        </div>
                    </div>
                    <div>
                        <h3>Sort By</h3>
                    </div>
                </div>
            </div>

            <div className="products_display">
                <aside className="products_categories">
                    <CategoryList pageCategory={pageCategory} searchProducts={searchProducts}/>
                </aside>
                <aside className="products_product">
                    {/* {console.log(products.products)} */}
                    {/* {products.products.forEach(p=>console.log(p.title))} */}
                    <ProductList products={products} setCart={setCart} handleAddToOrder={handleAddToOrder} />
                </aside>
            </div>
        </div>
    )
}