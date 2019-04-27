import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sam-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  host: {'class': 'sam-calendar-component'}
})
export class CalendarComponent implements OnInit {

  @Input() date: Date = new Date();
  @Output() dateChange: EventEmitter<any> = new EventEmitter();

  open: boolean = false;
  
  selectingDate = new Date();

  constructor() { }

  ngOnInit() {
    let firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    let lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
    console.log(this.date + " : " + firstDay + " : " + lastDay);
  }

  clicked() {
    this.open = !this.open;

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
  selectLeft() {
    this.date = new Date(this.date.getFullYear() , this.date.getMonth() - 1, this.date.getDate());
    this.onChange();
  }

  selectRight() {
    this.date = new Date(this.date.getFullYear() , this.date.getMonth() + 1, this.date.getDate());
    this.onChange();
  }
}
