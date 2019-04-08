import { Component, OnInit, ViewEncapsulation, Input, HostBinding, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'sam-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { '[class.sam-modal-wrapper]': 'true' },
})
export class ModalComponent implements OnInit {

  @HostBinding('class.sam-modal-wrapper-open') opened = false;
  @Input() imgURL: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  open() {
    setTimeout(()=>{
      this.opened = true;
      this.renderer.addClass(document.querySelector('body'),'modal-open');
    });
  }

  close(){
    this.opened = false;
    this.renderer.removeClass(document.querySelector('body'),'modal-open');
  }
}
@Component({
  selector: 'sam-modal-header',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { '[class.sam-modal-header]': 'true' },
})
export class ModalHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'sam-modal-body',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { '[class.sam-modal-body]': 'true' },
})
export class ModalBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'sam-modal-footer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { '[class.sam-modal-footer]': 'true' },
})
export class ModalFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}




