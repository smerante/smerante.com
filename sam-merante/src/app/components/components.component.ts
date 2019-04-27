import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  disabled: boolean = true;
  checkVal1: boolean = false;
  checkVal2: boolean = false;
  checkVal3: boolean = false;
  toggleVal1: boolean = false;
  toggleVal2: boolean = false;
  toggleVal3: boolean = false;
  toggleVal4: boolean = false;
  maleChecked: boolean = false;
  selectedDate: Date = new Date();
  date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
