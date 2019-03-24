import { NgModule } from '@angular/core';

import { DocumentationComponent, DocumentationHeaderComponent, DocumentationBodyComponent } from './documentation.component';

@NgModule({
  declarations: [
    DocumentationComponent,
    DocumentationHeaderComponent, 
    DocumentationBodyComponent
  ],
  imports: [
  ],
  exports:[
    DocumentationComponent,
    DocumentationHeaderComponent,
    DocumentationBodyComponent
  ]
})
export class DocumentationModule { }
