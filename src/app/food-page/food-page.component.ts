import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodServiceService } from '../services/food/food-service.service';
import { foodm } from '../shared/Models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: foodm;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fs: FoodServiceService,
    private cartss: CartService,
    private router:Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.food = this.fs.getItemById(params['id']);
    });
  }

  ngOnInit(): void {}

  addtocart() {
    // this.cartss.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
    // alert('hello')
  }
  hello(){
    alert("hello")
  }
}

// <div class="d-flex ms-auto">
//         <input class="form-control mr-sm-2 me-1" placeholder="Search" [(ngModel)]="Item" >
//         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//       </div>
