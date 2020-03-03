import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ListOfCardsComponent } from './list-of-cards/list-of-cards.component';
import { CribCardsComponent } from './crib-cards/crib-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ListOfCardsComponent,
    CribCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
