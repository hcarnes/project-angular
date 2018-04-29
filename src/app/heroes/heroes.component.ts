import { Component, OnInit } from '@angular/core';

import { Cat } from '../hero';
import { CatService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class CatsComponent implements OnInit {
  heroes: Cat[];

  constructor(private heroService: CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats(): void {
    this.heroService.getCats()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    //if name is non-blank, the handler creates a Cat-like object from the name (missing id) and passes addCat()
     this.heroService.addCat({ name } as Cat)
    //when addCat saves sucessfully, the subscribe callback receives the new hero and pushes it into the heroes list
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Cat): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteCat(hero).subscribe();
  }
}
