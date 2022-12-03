import { foodm } from "./food";

export class cartItem{
  constructor(food:foodm){
    this.food = food
  }

  food:foodm
  quantity:number = 1
  getPrice():Number {
    return this.food.price * this.quantity
  }
}
