import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sam-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'documentation-header',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class DocumentationHeaderComponent{
}

@Component({
  selector: 'documentation-body',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class DocumentationBodyComponent{
}




