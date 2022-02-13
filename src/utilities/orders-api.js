import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}
// Add an item to the cart
export function addItemToCart(product) {
    // sending whole object to backend, including pricing, which is not the best practice
    // however, due to lack of unique id from data scraper api, whole item objects must be sent
    // and logged into backend database to acquire unique id for further fetching
    return sendRequest(`${BASE_URL}/cart/items`, 'POST', {product});
}
// Change item quantity in navbar cart
export function setItemQtyInCart(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}
// Remove item from navbar cart
export function deleteItemInCart(itemId) {
    return sendRequest(`${BASE_URL}/cart/item/${itemId}`, 'DELETE', {itemId});
}
// Updates the order's (cart's) isPaid property to true
export function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}
// Gets all isPaid true orders
export function getOrderHistory() {
    return sendRequest(`${BASE_URL}/history`);
}