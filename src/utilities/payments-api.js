// const BASE_URL = 'http://localhost:3000/create-checkout-session';
import { getToken } from './users-service';

export function getPayment() {
    // return sendRequest(`${BASE_URL}`, 'POST', {CARTITEMS});
    console.log('start of fetch')
    const token = getToken();
    fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          // dont need to pass anything since we just grab cart in the back from req.user.id
          items: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 1 },
          ],
        }),

    })
    .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
        window.location = url
        // console.log(url)
    })
    .catch(e => {
        console.error(e.error)
    })
}