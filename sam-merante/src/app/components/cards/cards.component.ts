import { Component, OnInit, Input, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'sam-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { '[class.sam-card]': 'true'},
})
export class CardsComponent implements OnInit {

  @Input('imgSrc') imgSrc: string;
  @Input('placement') placement: string;
  
  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'card-header',
  template: '<ng-content></ng-content>',
  styleUrls: ['./cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { '[class.sam-card--header]': 'true' },
})
export class CardsHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'card-body',
  template: '<ng-content></ng-content>',
  styleUrls: ['./cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { '[class.sam-card--body]': 'true' },
})
export class CardsBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'card-footer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { '[class.sam-card--footer]': 'true' },
})
export class CardsFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


