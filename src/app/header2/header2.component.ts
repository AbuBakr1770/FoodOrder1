import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css'],
})
export class Header2Component implements OnInit {
  Item: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.Item = this.Item;
  }
  search() {
    this.router.navigateByUrl('/search/' + this.Item);
  }
}
