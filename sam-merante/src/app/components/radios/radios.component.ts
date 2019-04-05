import { Component, OnInit, Input, ViewEncapsulation, ContentChildren, QueryList, AfterContentInit, HostBinding } from '@angular/core';

@Component({
  selector: 'sam-radio-btn',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.sam-radio-btn]': 'true'
  },
})
export class RadiosComponent implements OnInit {

  @Input() label: string;
  @Input() id: string;
  
  @HostBinding('class.sam-radio-btn-disabled') @Input() disabled = false;

  checked: boolean;
  groupLabel: string;

  constructor() { }

  ngOnInit() {
  }
  click() {
    this.checked = true;
  }
}

@Component({
  selector: 'sam-radio-group',
  template: `
    <span class="sam-group-label">{{groupLabel}}</span>
    <ng-content></ng-content>
  `,
  styleUrls: ['./radios.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.sam-radio-group]': 'true'
  },
})
export class RadioGroupComponent implements AfterContentInit {

  @Input() groupLabel;
  @ContentChildren(RadiosComponent) comps: QueryList<RadiosComponent>;

  constructor() { }

  ngAfterContentInit() {
    this.comps.forEach(
      (comp: RadiosComponent) => {
        comp.groupLabel = this.groupLabel;
      });
  }

  check(id: string) {
    this.comps.forEach(
      (comp: RadiosComponent) => {
        comp.checked = false;
        if (comp.id === id) {
          comp.checked = true;
        }
      });
  }

}
