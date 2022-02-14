import "./ProductDetailPage.css";
import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import ProductReview from '../../components/ProductReview/ProductReview';
import ExpireMsg from "../../components/ExpireMsg/ExpireMsg";

export default function ProductDetailPage({user, cart, setCart, handleAddToOrder}) {
    const [productOne, setProductOne] = useState([]);
    const [productReviews, setProductReviews] = useState([]);
    const [productImage, setProductImage] = useState("");
    const [productInfo, setProductInfo] = useState("");
    const [addMsg, setAddMsg] = useState(false);

    const { productName } = useParams();
    const location = useLocation();
    const productPassed = location.state.dataToDetail;

    useEffect(function() {
        async function getProductFromURL() {
            const item = await itemsAPI.getOne(productPassed.link);
            setProductOne(item.products[0])
            setProductReviews(item.products[0].reviews)
            setProductImage(item.products[0].image[0][1])
            setProductInfo(item.products[0].product_info[0][0])
        }
        getProductFromURL();

        if (user) {
            async function getCart() {
                const cart = await ordersAPI.getCart();
                setCart(cart);
            }
            getCart();
        }
    },[]);

    // triggered upon change in msg status and defaults msg to false
    useEffect(function() {
        setTimeout(()=> {
            setAddMsg(false);
        }, 1000);
    }, [addMsg]);  

    function handleAddMessage() {
        if (user) {
            // checks if item in cart has reached limit and thus will not display message if so
            const check = cart.lineItems.map(item=> {
                if (item.item.title === productOne.title && item.qty < 5) {
                    setAddMsg(!addMsg)
                }
            })
        }
    }

    return (
        <div className="product_detail_page">

            {/* Pop-up message to indicate successful adding to cart, disappears after 2 sec */}
            {addMsg ?
            <ExpireMsg delay="2000">Successfully added to cart</ExpireMsg>
            :
            null
            }

            <div className="product_header">
                <div className="product_image">
                    {productImage
                    ?
                    <img src={ productImage } alt="" />
                    :
                    <img src={ productPassed.image } alt="" />
                    }
                </div>

                <div className="product_profile">
                    <strong className="title is-3">{ productOne.title }</strong><br/><br/>
                    <p className="subtitle is-5">{ productOne.price}</p>
                    <br/>
                    <br/>
                    <button 
                        onClick={
                            ()=> {
                                return (
                                        handleAddToOrder(productPassed),
                                        handleAddMessage()
                                )
                            }
                        }
                        className="button is-warning is-fullwidth is-focused"
                    >
                    <span>Add to Cart</span>
                    </button>
                </div>
            </div>

            <hr/>

            <div className="product_info">
                <h4 className="title is-4">Description</h4>
                {productInfo 
                ?
                <p>{productInfo}</p>
                :
                <h4 className="product_no_info">-</h4>
                }
                
            </div>

            <hr/>

            <div className="product_reviews">
                <h4 className="product_reviews_title title is-4">Reviews</h4>
                {productReviews
                ?
                productReviews.map((r, idx)=> <ProductReview review={r} key={idx} />)
                :
                <p className="product_no_reviews">No Reviews Present</p>
                }
            </div>
        </div>
    )
}