import { getToken } from './users-service';

export async function getPayment() {

    console.log('start of fetch')
    const token = getToken();
    fetch("/create-checkout-session", {
  
        method: "POST",
        // required user token to access user cart in backend
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        // body is empty as data (cart items) will be pulled from back end
        body: JSON.stringify(),
    })
    .then(res => {
        if (res.ok) {
          return res.json()
        }
        return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
        window.location = url
    })
    .catch(e => {
        console.error(e.error)
    })
}