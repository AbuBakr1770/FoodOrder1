import { Injectable } from '@angular/core';
import { foodm } from 'src/app/shared/Models/food';
import { tag } from 'src/app/shared/Models/tag';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  constructor() {}

  getItemById(id:number):foodm{
    return this.getAll().find(foodm => foodm.id == id)!
  }

  getItemByTag(tag: string): foodm[] {
    if (tag == 'All') return this.getAll();
    else {
      return this.getAll().filter((foodm) => foodm.tags?.includes(tag));
    }
  }
  getAllTag(): tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'Fast Food', count: 6 },
      { name: 'Soup', count: 2 },
      { name: 'Sharawma', count: 1 },
      // { name: 'India', count: 8 },
      { name: 'Fries', count: 2 },
      { name: 'pizza', count: 3 },
    ];
  }

  getAll(): foodm[] {
    return [
      {
        id: 1,
        name: 'Chicken cheese pizza',
        price: 23,
        favourite: false,
        stars: 4,
        tags: ['pizza','Fast Food'],
        imageURL: '../../../assets/food-pizza-1.jpg',
        cookTime: '30-40',
        origins: ['italy'],
      },
      {
        id: 2,
        name: 'mini pizza',
        price: 15,
        favourite: false,
        stars: 4.6,
        tags: ['pizza','Fast Food'],
        imageURL: '../../../assets/food-pizza-2.jpg',
        cookTime: '20-30',
        origins: ['italy'],
      },
      {
        id: 3,
        name: 'Speacial pizza',
        price: 30,
        favourite: false,
        stars: 4.9,
        tags: ['pizza','Fast Food'],
        imageURL: '../../../assets/food-pizza-3.jpg',
        cookTime: '35-40',
        origins: ['italy'],
      },
      {
        id: 4,
        name: 'Chicken Burger',
        price: 5,
        favourite: false,
        stars: 4.2,
        tags: ['burger','Fast Food'],
        imageURL: '../../../assets/food-burger-1.jpg',
        cookTime: '15-20',
        origins: ['italy'],
      },
      {
        id: 5,
        name: 'speacial cheese burger',
        price: 18,
        favourite: false,
        stars: 5,
        tags: ['burger','Fast Food'],
        imageURL: '../../../assets/food-burger-2.jpg',
        cookTime: '20-45',
        origins: ['italy'],
      },
      {
        id: 6,
        name: 'Salted Fries',
        price: 7,
        favourite: false,
        stars: 3.8,
        tags: ['Fries',''],
        imageURL: '../../../assets/food-fries.jpg',
        cookTime: '10-15',
        origins: ['italy'],
      },
      {
        id: 7,
        name: 'speacial loaded fries',
        price: 13,
        favourite: false,
        stars: 4.5,
        tags: ['Fries'],
        imageURL: '../../../assets/food-loaded-fries.jpg',
        cookTime: '15-20',
        origins: ['italy'],
      },
      {
        id: 8,
        name: 'Soup',
        price: 6,
        favourite: false,
        stars: 4.0,
        tags: ['Soup'],
        imageURL: '../../../assets/food-soup-1.jpg',
        cookTime: '20-25',
        origins: ['italy'],
      },
      {
        id: 9,
        name: 'Soup 2',
        price: 10,
        favourite: false,
        stars: 4,
        tags: ['Soup'],
        imageURL: '../../../assets/food-soup-2.jpg',
        cookTime: '20-25',
        origins: ['italy'],
      },
      {
        id: 10,
        name: 'sharawma',
        price: 12,
        favourite: false,
        stars: 3.6,
        tags: ['quick','Fast Food', 'Sharawma'],
        imageURL: '../../../assets/food-sharawma.jpg',
        cookTime: '5-10',
        origins: ['italy'],
      },
    ];
  }
}
