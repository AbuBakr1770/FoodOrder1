import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tag } from '../shared/Models/tag';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  Item:string = '';


  constructor(private route: ActivatedRoute, private router: Router,) {}

  ngOnInit(): void {
    this.Item = this.Item

  }


  search(){
      this.router.navigateByUrl('/search/' + this.Item)


   }
}
