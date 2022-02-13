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
        default:
            getProduct = 'all';
            break;
    }

    // All product category pages from navbar use this 
    // page as template and will re-render data based on pageCategory
    useEffect(function() {
        async function getProducts() {
            const items = await itemsAPI.getAll(getProduct);
            setProducts(Object.values(items.products));
        }
        getProducts();

        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();

    },[pageCategory]);
    
    function handleChange(evt) {
        setSearchQuery(evt.target.value);
    }

    // utilizes the data scraper api search query
    async function searchProducts(searchQuery) {
        const items = await itemsAPI.getAll(searchQuery);
        setProducts(Object.values(items.products));
        setSearchQuery("")
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
                    <ProductList products={products} handleAddToOrder={handleAddToOrder} />
                </aside>
            </div>
        </div>
    )
}