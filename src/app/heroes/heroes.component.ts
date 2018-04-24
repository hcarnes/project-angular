import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    //if name is non-blank, the handler creates a Hero-like object from the name (missing id) and passes addHero()
     this.heroService.addHero({ name } as Hero)
    //when addHero saves sucessfully, the subscribe callback receives the new hero and pushes it into the heroes list
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
