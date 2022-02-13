# UPGD - A Modern E-Commerce store

## General Information
UPGD is short for upgrade/update. It is an online store to purchase computer hardware and accessories. The web app is user-centric, allowing visitors to browse products and product details but unable to add items to cart until logged in. Visitors will register with a name, email, and passsword which are then sent to the backend via AJAX and later encoded (JWT). Once logged in, users will have access to full CRUD in their shopping cart and also pay via Stripe API.

<img src="/public/assets/screenshots/homepage.jpg" width=200px height=500px overflow="hidden"> <img  src="/public/assets/screenshots/productpage.jpg" width=200px height=500px overflow="hidden"> <img  src="/public/assets/screenshots/productdetailpage.jpg" width=200px height=500px overflow="hidden"> <img  src="/public/assets/screenshots/paymentpage.jpg" width=200px height=500px overflow="hidden">
<img  src="/public/assets/screenshots/purchaseconfirmationpage.jpg" width=200px height=500px overflow="hidden"> <img  src="/public/assets/screenshots/profilepage.jpg" width=200px height=500px overflow="hidden">

## Technologies used
* React
* HTML, CSS, & Javascript
* MongoDB, Express, Node
* Heroku app Deployment
* Git v2.33.1 Mac
* Visual Studio Code v1.62.3

## Features
### Usage
* Visit [UPGD](https://u-p-g-d.herokuapp.com/) today and experience what a modern electronic E-commerce store should look like!
* [Project Planning](https://trello.com/b/t7Uf6C1V/e-commerce-mern) with WireFrames and ERD.

### Implemented
* Token-based Authentication (JWT)
* Newegg Data Scraper API (product search through query and url)
* User-centric CRUD functionality - GET, POST, PUT, and DELETE HTML methods from backend node server
* Mongo database with mongoose schemas

### Future Development Ideas
* Provide sorting functionality after receiving data from API in front end
* Save encrypted data such as payment information, address, and phone number tied to each user
* Have structure space readily available for ad-integration
* Display more user-preference items based on categories in purchase history
* Include other forms of payment such as paypal and shopify

