import User from "./user";
import Item from "./item"

const user = new User('1', 'Joe Schmoe', 25);

const itemA = new Item('1', 'Hacky Sack', 10, 'A fun sack that conveniently may be hackied');
const itemB = new Item('2', 'Walking Stick', 20, 'Gandalf would be jealous');
const itemC = new Item('3', 'Skateboard', 30, 'A wicked skidder');

user.addToCart(itemA);
user.printCart(user);
console.log('Total:', user.cartTotal());

user.addToCart(itemB);
user.addToCart(itemC);
user.printCart(user);
console.log('Total:', user.cartTotal());

user.removeFromCart(itemA);
user.printCart(user)
console.log('Total:', user.cartTotal());
user.removeFromCart(itemB);
user.removeFromCart(itemC);
user.printCart(user);
console.log('Total:', user.cartTotal());
