import User from './User';
import Shop from './Shop';

// Create a Shop
const shop: Shop = new Shop();

// Create a User
const user: User = new User('John Doe', 25);

// Add items from the shop to the user's cart
const itemsInShop = shop.getItems();
user.addToCart(itemsInShop[0]); // Adding Item A to the cart
user.addToCart(itemsInShop[1]); // Adding Item B to the cart
user.addToCart(itemsInShop[2]); // Adding Item C to the cart

// Print the user's cart
user.printCart();

// Remove all instances of a singular item from the user's cart
user.removeFromCart(itemsInShop[0]); // Removing Item A from the cart

// Print the user's cart after removal
user.printCart();

// Remove a quantity from the user's cart
user.removeQuantityFromCart(itemsInShop[2], 1); // Removing 1 instance of Item C

// Print the user's cart after quantity removal
user.printCart();

// Print the total price of the items in the user's cart
console.log('Cart Total:', user.cartTotal());