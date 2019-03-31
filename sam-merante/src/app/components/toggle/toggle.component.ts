import { Component, OnInit, Directive, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sam-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  host: { '[class.sam-toggle-wrapper]': 'true' },
  encapsulation: ViewEncapsulation.None
})
export class ToggleComponentWrapper implements OnInit {

  @Input() field_id: string;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[sam-toggle]',
})
export class ToggleComponent implements OnInit {

  @HostBinding('class.sam-toggle--field') @Input() default = true;

  constructor() { }

  ngOnInit() {
  }

}