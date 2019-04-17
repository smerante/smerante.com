import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

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
  contentOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  closeTooltip() {
    this.contentOpen = false;
  }
  toggleTooltip(){
    this.contentOpen = !this.contentOpen;
    if(!this.contentOpen) {
      (<HTMLElement>document.getElementById(this.tooltipId)).focus();
    }
  }
}
