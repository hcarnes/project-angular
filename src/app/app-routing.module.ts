import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes= [
  { path: 'heroes', component: HeroesComponent }
];

// RouterModule makes router directives available for use in the AppModule components that will need them
@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule { }