import { v4 as uuidv4 } from 'uuid';

export default class Item {

  constructor(
    private _id: string = uuidv4(),
    private _name: string,
    private _price: number,
    private _description: string
  ){}

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}