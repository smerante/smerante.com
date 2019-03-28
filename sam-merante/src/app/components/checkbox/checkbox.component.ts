import { Component, OnInit, HostBinding, Input, Directive, ViewEncapsulation, Output, EventEmitter, HostListener } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  
  @HostListener('mouseover')
  onHover(){
    let ua = navigator.userAgent;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)){
      document.getElementById(this.field_id).click();
    }
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
