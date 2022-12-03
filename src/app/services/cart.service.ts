import { Injectable } from '@angular/core';
import { Cart } from '../shared/Models/Cart';
import { foodm } from '../shared/Models/food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private Cart: Cart = new Cart();
  addToCart(food: foodm): void {
    let cartItem: any = this.Cart.items.find((item) => item.food.id == food.id);
    if (cartItem) {
      this.changeCartQuantity(food.id, cartItem.quantity + 1);
      return;
    }

    this.Cart.items.push(new cartItem(food));
  }

  removeFromCart(foodId: number): void {
    this.Cart.items = this.Cart.items.filter((item) => item.food.id, !foodId);
  }
  changeCartQuantity(quantity: number, foodId: number) {
    let cartItem: any = this.Cart.items.find((item) => item.food.id);
    if (!cartItem) cartItem.quantity = quantity;
  }
  getCart(): Cart {
    return this.Cart;
  }
}
