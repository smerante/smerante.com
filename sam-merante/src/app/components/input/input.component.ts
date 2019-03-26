import { Component, OnInit, HostBinding, Input, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sam-input-wrapper',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputWrapperComponent implements OnInit {

  @Input() field_id: string;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

  hasValue(): boolean{
    let input = document.getElementById(this.field_id);
    return input && input['value'] && input['value'].match(/[^\s*$]/g) ? input['value'].match(/[^\s*$]/g).length > 0 : false;
  }

}
@Directive({
  selector: '[sam-input]',
})
export class InputComponent implements OnInit {

  @HostBinding('class.sam-input-wrapper--field') @Input() default = true;

  constructor() { }

  ngOnInit() {
  }

}

