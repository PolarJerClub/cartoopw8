import Item from './Item';
import User from './User';

class Shop {
  private items: Item[];

  constructor() {
    this.items = [
        new Item('Hacky Sack', 10, 'A fun sack that conveniently may be hackied'),
        new Item('Walking Stick', 20, 'Gandalf would be jealous'),
        new Item('Skateboard', 30, 'A wicked skidder'),
        new Item('Basketball', 30, 'A basketball'),
        new Item('Pogo Stick', 30, 'Bouncey bouncey'),
        new Item('Hat', 30, 'A hat'),
        new Item('Megadeath Shirt', 30, 'You know'),
        new Item('Mystery Box', 30, 'Who knows'),
        new Item('Wand', 30, 'Expecto Patronum'),
        new Item('Map to Atlantis', 30, 'Icelandic diary'),
    ];
  }

  public getItems(): Item[] {
    return this.items;
  }

  public setItems(): Item[] {
    return this.items
  }

  public showItems(): void {
    const shopDiv = document.getElementById('shop');
    if (!shopDiv) return;

    this.items.forEach((item) => {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `
        <p>Name: ${item.getName()}</p>
        <p>Price: ${item.price}</p>
        <p>Description: ${item.getDescription()}</p>
        <button data-item-id="${item.getId()}">Add to Cart</button>
      `;

      itemDiv.querySelector('button')?.addEventListener('click', () => {
        if (User.myUser) {
          User.myUser.addToCart(item);
          this.updateCart();
        }
      });

      shopDiv.appendChild(itemDiv);
    });
  }

  public updateCart(): void {
    const cartDiv = document.getElementById('cart');
    if (!cartDiv || !User.myUser) return;
  
    cartDiv.innerHTML = '';
    cartDiv.appendChild(User.myUser.cartHTMLElement());
  
    const cartButtons = cartDiv.querySelectorAll('button');
    cartButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const itemId = button.getAttribute('data-item-id');
        const action = button.getAttribute('data-action');
  
        if (itemId && action) {
          const item = this.items.find((item) => item.getId() === itemId);
  
          if (item) {
            if (action === 'remove-one') {
              if (User.myUser) {
                User.myUser.removeQuantityFromCart(item, 1);
                this.updateCart();
              }
            } else if (action === 'remove-all') {
              if (User.myUser) {
                User.myUser.removeFromCart(item);
                this.updateCart();
          }
        }
    }
}
      });
    });
  }
}

export default Shop;