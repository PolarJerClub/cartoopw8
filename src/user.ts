import { v4 as uuidv4 } from 'uuid';
import Item from './item';

export default class User {

  constructor(
  private _id: string = uuidv4(),
  private _name: string,
  private _age: number,
  private _cart: Item[] = []
  ){}

  public get cart(): Item[] {
    return this._cart;
  }
  public set cart(value: Item[]) {
    this._cart = value;
  }
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  addToCart(item: Item): void {
    this.cart.push(item);
  }

  removeFromCart(item: Item): void {
    this.cart = this.cart.filter((cartItem) => cartItem !== item);
  }

  removeQuantityFromCart(item: Item, user: User, quantity: number): void {
    const itemIndex = user.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
      const itemInCart = user.cart[itemIndex];
      if (itemInCart) {
        if (itemInCart.price < quantity) {
          user.cart.splice(itemIndex, 1);
        } else {
          itemInCart.price -= quantity;
        }
      }
    }
  }

  cartTotal(): number {
    let total = 0
    for (let item of this.cart){
        total += item.price
    }
    return total
  }

  printCart(user: User): void {
    console.log('Your cart:');
    user.cart.forEach((item) => {
      console.log(`- ${item.name}: $${item.price}`);
    });
  }

  itemQuantityInCart(cart: Item[], item: Item): number {
  return cart.filter((cartItem) => cartItem === item).length;
}
}