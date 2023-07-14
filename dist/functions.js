"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.cartTotal = exports.removeQuantityFromCart = exports.removeFromCart = exports.addToCart = exports.createItem = exports.createUser = void 0;
const uuid_1 = require("uuid");
function createUser(name, age) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: [],
    };
}
exports.createUser = createUser;
function createItem(name, price, description) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description,
    };
}
exports.createItem = createItem;
function addToCart(item, user) {
    user.cart.push(item);
}
exports.addToCart = addToCart;
function removeFromCart(item, user) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
exports.removeFromCart = removeFromCart;
function removeQuantityFromCart(item, user, quantity) {
    const itemIndex = user.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
        const itemInCart = user.cart[itemIndex];
        if (itemInCart) {
            if (itemInCart.price < quantity) {
                user.cart.splice(itemIndex, 1);
            }
            else {
                itemInCart.price -= quantity;
            }
        }
    }
}
exports.removeQuantityFromCart = removeQuantityFromCart;
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price, 0);
}
exports.cartTotal = cartTotal;
function printCart(user) {
    console.log('Your cart:');
    user.cart.forEach((item) => {
        console.log(`- ${item.name}: $${item.price}`);
    });
}
exports.printCart = printCart;
