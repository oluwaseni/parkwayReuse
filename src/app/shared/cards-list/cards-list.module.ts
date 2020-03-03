import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards-lists/cards/cards.component';
import { ListsComponent } from './cards-lists/lists/lists.component';



@NgModule({
  declarations: [CardsComponent, ListsComponent],
  imports: [
    CommonModule
  ]
})
export class CardsListModule { }
