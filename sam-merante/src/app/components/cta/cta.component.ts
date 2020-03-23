import { Component, OnInit, ViewEncapsulation, HostBinding, Input, ElementRef, Renderer2, Host, HostListener } from '@angular/core';

@Component({
  selector: '[sam-cta]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./cta.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CtaComponent implements OnInit {

  @HostBinding('class.sam-btn') @Input() type : string = 'primary';
  @HostBinding('class.sam-btn--small') @Input() small : boolean = false;

  constructor(
    private elRef: ElementRef,
    private render: Renderer2) { }

  ngOnInit() {
    if(this.type === 'secondary'){
      this.render.addClass(this.elRef.nativeElement,'sam-btn--secondary');
    }
    else if(this.type === 'tertiary'){
      this.render.addClass(this.elRef.nativeElement,'sam-btn--tertiary');
    }
  }

  @HostListener('mouseover')
  onHover(){
    // let ua = navigator.userAgent;
    // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)){
    //   this.elRef.nativeElement.click();
    // }
  }

}
