import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent, CardsHeaderComponent, CardsBodyComponent, CardsFooterComponent,  } from './cards.component';

@NgModule({
  declarations: [
    CardsComponent,
    CardsHeaderComponent,
    CardsBodyComponent,
    CardsFooterComponent
  ],
  exports: [
    CardsComponent,
    CardsHeaderComponent,
    CardsBodyComponent,
    CardsFooterComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CardsModule { }
