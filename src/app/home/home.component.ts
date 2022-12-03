import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../services/food/food-service.service';
import { foodm } from '../shared/Models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: foodm[] = [];

  constructor(private fs: FoodServiceService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      if (params['searchItem'])
        this.foods = this.fs  //fs is FoodService
          .getAll()
          .filter((foodm) =>
            foodm.name //foodm is food
              .toLowerCase()
              .includes(params['searchItem'].toLowerCase())
          )
          else if(params['tag']){
            this.foods = this.fs.getItemByTag(params['tag'])
          }
      else this.foods = this.fs.getAll();

    });
  }
}
