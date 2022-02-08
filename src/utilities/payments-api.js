
// const BASE_URL = 'http://localhost:3000/create-checkout-session';

export function getPayment() {
    // return sendRequest(`${BASE_URL}`, 'POST', {CARTITEMS});
    console.log('start of fetch')
    fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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