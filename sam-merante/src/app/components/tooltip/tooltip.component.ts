import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';

let uniqueId = 0;
@Component({
  selector: 'sam-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'sam-tooltip'
  }
})
export class TooltipComponent implements OnInit {
  @Input('tooltipId') tooltipId: string = 'sam-tooltip-' + (++uniqueId);
  @Input('tooltipLabel') tooltipLabel: string = 'Label ' + uniqueId;
  @Input('tooltipAriaLabel') tooltipAriaLabel: string = this.tooltipLabel + '. Open tooltip';
  @ViewChild('tooltipContainer') tooltipContainer: ElementRef;

  contentOpen: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  closeTooltip() {
    this.contentOpen = false;
  }

  @HostListener('window:scroll', ['$event.target'])
  onScroll() {
    this.updateContainerPos();
  }

  updateContainerPos(){
    let top = (<HTMLElement>document.getElementById(this.tooltipId)).getBoundingClientRect().top;
    let height = window.innerHeight;
    this.renderer.setStyle(this.tooltipContainer.nativeElement,'bottom', (height - top) + 16 + 'px');

    let left = (<HTMLElement>document.getElementById(this.tooltipId)).getBoundingClientRect().left;
    let width = this.tooltipContainer.nativeElement.getBoundingClientRect().width;
    this.renderer.setStyle(this.tooltipContainer.nativeElement,'left', left - (width/2) + 'px');
  }
  
  toggleTooltip(){
    this.contentOpen = !this.contentOpen;
    if(!this.contentOpen) {
      (<HTMLElement>document.getElementById(this.tooltipId)).focus();
    }else {
      setTimeout(()=>{
        this.updateContainerPos();
      });
    }
  }
}
