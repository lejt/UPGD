import "./ProductDetailPage.css";
import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import ProductReview from '../../components/ProductReview/ProductReview';
import ExpireMsg from "../../components/ExpireMsg/ExpireMsg";

export default function ProductDetailPage({user, setCart, handleAddToOrder}) {
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
            // console.log(typeof item.products);
            // console.log(item.products[0]);
            // console.log(Object.values(item.products)[0]);
            // item.products[0].reviews.forEach(r => console.log(r))
            // setProductOne(Object.values(item.products)[0]);
            // console.log(productOne);
            setProductOne(item.products[0])
            setProductReviews(item.products[0].reviews)
            setProductImage(item.products[0].image[0][1])
            setProductInfo(item.products[0].product_info[0][0])
        }
        getProductFromURL();

        if (user) {
            async function getCart() {
                console.log("running useEffect getCart")
                const cart = await ordersAPI.getCart();
                setCart(cart);
            }
            getCart();
        }

    },[]);

    useEffect(function() {
        setTimeout(()=> {
            setAddMsg(false);
            console.log('UseEF SETTIME: '+addMsg)
        }, 1000);
    }, [addMsg]);  

    function handleAddMessage() {
        console.log('CLICK, before first change'+addMsg)
        setAddMsg(!addMsg)
        // setTimeout(handleHideAddMessage,3000)
        // handleHideAddMessage()
    }
    console.log('after CLICK'+addMsg)


    // productOne.reviews.forEach(r=> console.log(r));
    return (
        <div className="product_detail_page">

            {/* popup message when add button clicked */}
            {/* <div className={`notification is-success `}>
                <button className="delete"></button>
                Lorem ipsum
            </div> */}
            {console.log('just before msg'+addMsg)}
            {addMsg ?
            <ExpireMsg delay="2000">Successfully added item to cart</ExpireMsg>
            :
            null
            }


            {/* { productName } */}
            {/* { productPassed.link } */}
            <div className="product_header">
                <div className="product_image">
                    <img src={ productImage } alt="" />
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
                {/* <p>{productOne.product_info}</p> */}
                <p>{productInfo}</p>
            </div>
            <hr/>
            <div className="product_reviews">
                <h4 className="product_reviews_title title is-4">Reviews</h4>
                {/* {productOne.reviews ? console.log("it exists"): console.log("needs to load some more")}
                {productReviews ? console.log("PR exists"): console.log("PR needs to load some more")} */}
                {/* {console.log(productOne)} */}
                {/* {console.log(productReviews)} */}
                {productReviews
                ?
                productReviews.map((r, idx)=> <ProductReview review={r} key={idx} />)
                :
                <p className="product_no_reviews">No Reviews Present</p>
                }
                {/* {productReviews.map((r, idx)=> <ProductReview review={r} key={idx} />)} */}
   
            </div>
        </div>
    )
}