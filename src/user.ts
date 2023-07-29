import { v4 as uuidv4 } from 'uuid';
import Item from './Item';
import Shop from './Shop';

class User {
  private id: string;
  private name: string;
  private age: number;
  private cart: Item[];

  constructor(name: string, age: number) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.cart = [];
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getCart(): Item[] {
    return this.cart;
  }

  public addToCart(item: Item): void {
    this.cart.push(item);
  }

  public removeFromCart(item: Item): void {
    this.cart = this.cart.filter((cartItem) => cartItem.getId() !== item.getId());
  }

  public removeQuantityFromCart(item: Item, quantity: number): void {
    const index = this.cart.findIndex((cartItem) => cartItem.getId() === item.getId());

    if (index !== -1) {
      const cartItem = this.cart[index];
      cartItem.price -= quantity;
      if (cartItem.price <= 0) {
        this.cart.splice(index, 1);
      }
    }
  }

  public cartTotal(): number {
    return this.cart.reduce((total, item) => total + item.getPrice, 0);
  }

  public static loginUser(event: Event): void {
    event.preventDefault();
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const ageInput = document.getElementById('age') as HTMLInputElement;

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value, 10);

    if (name && !isNaN(age)) {
      User.myUser = new User(name, age);
      const shop = new Shop();
      shop.showItems();
      shop.updateCart();
    } else {
      alert('Please enter a valid name and age.');
    }
  }

  public cartHTMLElement(): HTMLElement {
    const cartDiv = document.createElement('div');

    if (this.cart.length === 0) {
      cartDiv.textContent = 'The cart is empty.';
    } else {
      this.cart.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
          <p>Name: ${item.getName()}</p>
          <p>Price: ${item.getPrice}</p>
          <p>Description: ${item.getDescription()}</p>
          <button data-item-id="${item.getId()}" data-action="remove-one">Remove One</button>
          <button data-item-id="${item.getId()}" data-action="remove-all">Remove All</button>
        `;
        cartDiv.appendChild(itemDiv);
      });
    }

    return cartDiv;
  }

  public static myUser: User | undefined;

  public printCart(): void {
    console.log(`${this.name}'s Cart:`);
    this.cart.forEach((item, index) => {
      console.log(`Item ${index + 1}:`);
      console.log(`  Name: ${item.getName()}`);
      console.log(`  Price: ${item.getPrice}`);
      console.log(`  Description: ${item.getDescription()}`);
    });
  }
}

export default User;