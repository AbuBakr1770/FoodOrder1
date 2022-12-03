import { Component, Input, OnInit } from '@angular/core';
import { FoodServiceService } from '../services/food/food-service.service';
import { tag } from '../shared/Models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTag?:string[]
  tag?:tag[] = []
  constructor(private fs:FoodServiceService) { }

  ngOnInit(): void {

    if(!this.foodPageTag){

      this.tag = this.fs.getAllTag()
    }
  }

}
