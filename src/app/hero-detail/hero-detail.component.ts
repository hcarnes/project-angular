import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CatService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  @Input() hero: Cat;
  @Input() livesSaved: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: CatService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCat();
    this.getLivesSaved();
  }
  
  getCat(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getCat(id)
      .subscribe(hero => this.hero = hero);
  }

  getLivesSaved(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getLivesSaved(id)
      .subscribe(livesSaved => this.livesSaved = livesSaved)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateCat(this.hero)
    .subscribe(() => this.goBack())
  }
}
