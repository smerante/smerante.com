import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sam-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  host: { 'class': 'sam-calendar-component' }
})
export class CalendarComponent implements OnInit {

  @Input() date: Date = new Date();
  @Output() dateChange: EventEmitter<any> = new EventEmitter();

  open: boolean = false;
  weeks = []; //5 Weeks per month
  weekDays = [];
  constructor() { }

  ngOnInit() {
    this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
  }

  getWeeksInMonth(month, year) {
    this.weeks = [];
    let firstDate = new Date(year, month, 1),
      lastDate = new Date(year, month + 1, 0),
      numDays = lastDate.getDate();
    let weekNum = 0;
    let start = 0;
    let end = 7 - firstDate.getDay();
    while (start <= numDays) {
      let week = [];
      for (let i = 0; i < 7; i++) {
        let day: Date = new Date(this.date.getFullYear(), this.date.getMonth(), (start + i));

        if (weekNum == 0) {
          day = new Date(this.date.getFullYear(), this.date.getMonth(), (start + i) - (firstDate.getDay() - 1));
        }
        week.push(day);
      }
      this.weeks.push(week);
      start = end + 1;
      end = end + 7;
      if (end > numDays)
        end = numDays;
      weekNum++;
    }
    return this.weeks;
  }

  clicked() {
    this.open = !this.open;

  }

  onChange() {
    this.dateChange.emit(this.date);
  }

  selectLeft() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, this.date.getDate());
    this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
    this.onChange();
  }

  selectRight() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, this.date.getDate());
    this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
    this.onChange();
  }

  getDaysFromWeek(week: number): any[] {
    return this.weekDays[week];
  }
}
