import { Component, OnInit, HostBinding, Input, Directive, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sam-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: { '[class.sam-checkbox-wrapper]': 'true' },
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponentWrapper implements OnInit {

  @Input() field_id: string;
  @Input() label: string;
  @Input() check: boolean;
  constructor() { }

  ngOnInit() {
  }

}
@Directive({
  selector: '[sam-checkbox]',
})
export class CheckboxComponent implements OnInit {

  @HostBinding('class.sam-checkbox--field') @Input() default = true;

  constructor() { }

  ngOnInit() {
  }

}
