import { v4 as uuidv4 } from 'uuid';

class Item {
  private id: string;
  private name: string;
  private _price: number;
  private description: string;

  constructor(name: string, price: number, description: string) {
    this.id = uuidv4();
    this.name = name;
    this._price = price;
    this.description = description;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public get getPrice(): number {
    return this._price;
  }

  public set price(value: number) {
    this._price = value;
  }

  public getDescription(): string {
    return this.description;
  }
}

export default Item;