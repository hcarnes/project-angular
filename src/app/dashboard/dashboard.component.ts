import { Component, OnInit } from '@angular/core';
import { Cat } from '../hero';
import { CatService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Cat[] = [];

  constructor(private heroService: CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.heroService.getCats()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}