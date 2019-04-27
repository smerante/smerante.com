import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sam-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() date: any;
  @Output() dateChange: EventEmitter<any> = new EventEmitter();

  open: boolean = false;
  currentDate = new Date();
  selectingDate = new Date();

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.open = !this.open;
    let firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    let lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    console.log(this.currentDate + " : " + firstDay + " : " + lastDay);

  }
  onChange() {
    this.dateChange.emit(this.date);
  }
  // submit() {
  //   if (this.date) {
  //     console.log(this.date);
  //     let dates = this.date.split('-');
  //     console.log(dates[0], (dates[1] - 1), dates[2]);
  //     let selectedDate = new Date(dates[0], (dates[1] - 1), dates[2]);
  //     console.log(selectedDate);
  //     console.log(selectedDate.getDay() + ', ' + selectedDate.getMonth + ' ' + selectedDate.getDate() + ', ' + selectedDate.getFullYear());
  //   }
  // }
}
