import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodServiceService } from '../services/food/food-service.service';
import { Cart } from '../shared/Models/Cart';
import { cartItem } from '../shared/Models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart! : Cart

  constructor(private cartss: CartService, private fs: FoodServiceService) {
    this.setCart()
  }

  ngOnInit(): void { }

  setCart() {
    this.cart = this.cartss.getCart();
  }

  removeFromCart(cartItem: cartItem) {
    this.cartss.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem: cartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartss.changeCartQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
