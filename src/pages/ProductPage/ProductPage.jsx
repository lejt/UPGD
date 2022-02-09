import "./ProductPage.css";
import { useState, useEffect } from 'react';
import * as ordersAPI from "../../utilities/orders-api"; 
import * as itemsAPI from '../../utilities/items-api';
import ProductList from "../../components/ProductList/ProductList";
import CategoryList from "../../components/CategoryList/CategoryList";

export default function ProductPage({cart, setCart, handleAddToOrder}) {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [addMsg, setAddMsg] = useState(false);

    useEffect(function() {
        async function getProducts() {
            const items = await itemsAPI.getAll();
            // console.log(items.products);
            // console.log(Object.values(items.products))
            // console.log(items.products)
            setProducts(Object.values(items.products));
        }
        getProducts();
    },[]);

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

    function handleAddMessage() {
        // setAddMsg(!addMsg)
        // console.log(addMsg)

    }
    function handleHideAddMessage() {
        
    }

    return (
        <div className="products">

            {/* popup message when add button clicked */}
            {/* <div className={`notification is-success ${addMsg ? 'alert-shown' : 'alert-hidden'}` }>
                    <div className="notification_msg">
                        Successfully added item to cart.
                    </div>
            </div> */}
            <div className="notification is-success">
                <button className="delete"></button>
                Lorem ipsum
            </div>

            <div className="products_banner">
                <h1>All Products</h1>
            </div>
            <div className="products_header">
                <h3># of Items</h3>
                <div className="products_header_right">
                    <div className="products_searchBar">
                        <input className="products_searchInput" type="text" name="search" value={searchQuery} onChange={handleChange} placeholder="Look up products"/>
                        <button onClick={()=> searchProducts(searchQuery)}>Search</button>
                    </div>
                    <h3>Sort By</h3>
                </div>
            </div>

            <div className="products_display">
                <aside className="products_categories">
                    <CategoryList />
                </aside>
                <aside className="products">
                    {/* {console.log(products.products)} */}
                    {/* {products.products.forEach(p=>console.log(p.title))} */}
                    <ProductList products={products} setCart={setCart} handleAddToOrder={handleAddToOrder} handleAddMessage={handleAddMessage} handleHideAddMessage={handleHideAddMessage} />
                </aside>
            </div>
        </div>
    )
}