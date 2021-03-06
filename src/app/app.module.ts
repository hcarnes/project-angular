import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CatDetailComponent }  from './hero-detail/hero-detail.component';
import { CatsComponent }      from './heroes/heroes.component';
import { CatService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { CatSearchComponent } from './hero-search/hero-search.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CatsComponent,
    CatDetailComponent,
    MessagesComponent,
    CatSearchComponent
  ],
  providers: [ CatService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }