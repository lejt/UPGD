import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
    console.log('orders api here');
    return sendRequest(`${BASE_URL}/cart`);
}
  
// Add an item to the cart
export function addItemToCart(product) {
    // Just send itemId for best security (no pricing)
    // SENDING WHOLE OBJ HERE, including pricing, which is not the best practice
    // console.log('orders api addToCart here' + product.price);
    // const stringifiedProduct = JSON.stringify(product);
    return sendRequest(`${BASE_URL}/cart/items`, 'POST', {product});
    // return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}