import User from './User';
import Shop from './Shop';

const loginButton = document.getElementById('loginButton');
loginButton?.addEventListener('click', User.loginUser);

// Run on page load
window.onload = () => {
  const user = User.myUser;
  if (user) {
    const shop = new Shop();
    shop.showItems();
    shop.updateCart();
  }
};