import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalComponent, ModalHeaderComponent, ModalBodyComponent, ModalFooterComponent } from './modal.component';

let comps = [
  ModalComponent,
  ModalHeaderComponent,
  ModalBodyComponent,
  ModalFooterComponent
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class ModalModule { }
