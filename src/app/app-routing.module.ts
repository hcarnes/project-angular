import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatsComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { CatDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CatDetailComponent },
  { path: 'heroes', component: CatsComponent }
];

// RouterModule makes router directives available for use in the AppModule components that will need them
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
