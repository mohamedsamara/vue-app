## Vue App

### Description

This is a Vue project that displays a collection of products to users, allowing users to add products to a shopping cart, and removing products from the cart. 

### Technical Implementations

* SPA routing with [Vue Router](https://router.vuejs.org)
* Styling with CSS with Vue Single File Component (SFC) style
* The cart is persisted in the browser local storage and is initialized in [Pinia](https://pinia.vuejs.org) cart store and then accessed in the cart page.
* Products are fetched from [Fake API](https://fakestoreapi.com) using [mande](https://posva.net/mande), stored in  Pinia products store and accessed in the shop page

### Quick start

1. Clone this repo using `git clone https://github.com/mohamedsamara/vue-app.git`
2. Move to the directory: `cd <PROJECT_NAME>`.<br />
3. Run `yarn install` in order to install dependencies.<br />

## Documentation

See [Docs](./vue.md)
