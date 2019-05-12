import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

enum DateView {
  days = 0,
  months = 1,
  years = 2
}

@Component({
  selector: 'sam-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  host: { 'class': 'sam-calendar-component' }
})
export class CalendarComponent implements OnInit {

  @Input('date') selectedDate: Date = new Date();
  @Output() dateChange: EventEmitter<any> = new EventEmitter();

  date: Date = new Date();
  lastSelectedDate: Date;
  open: boolean = false;
  weeks = [];
  weekDays = [];
  years = [];
  months = [];
  view: DateView = DateView.days;
  constructor() { }

  ngOnInit() {
    this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
    this.initYears(this.date);
    this.initMonths(this.date);
    this.lastSelectedDate = this.date;
  }

  initYears(start: Date) {
    this.years = [];
    let year = -6;
    for (let i = 0; i < 12; i++) {
      this.years.push(new Date(start.getFullYear() + year, 0, 1));
      year++;
    }
  }

  initMonths(year: Date) {
    this.months = [];
    for (let i = 0; i < 12; i++) {
      this.months.push(new Date(year.getFullYear(), i, 1));
    }
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
    this.dateChange.emit(this.selectedDate);
  }

  selectLeft() {
    if (this.view === DateView.days) {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, this.date.getDate());
      this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
      this.onChange();
    }
    else if (this.view === DateView.months) {
      this.date = new Date(this.date.getFullYear() - 1, 0, 1)
      this.initMonths(this.date);
    }
    else if (this.view === DateView.years) {
      this.date = new Date(this.date.getFullYear() - 7, 0, 1)
      this.initYears(this.date);
    }
  }

  selectRight() {
    if (this.view === DateView.days) {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, this.date.getDate());
      this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
      this.onChange();
    }
    else if (this.view === DateView.months) {
      this.date = new Date(this.date.getFullYear() + 1, 0, 1)
      this.onChange();
    }
    else if (this.view === DateView.years) {
      this.date = new Date(this.date.getFullYear() + 7, 0, 1)
      this.initYears(this.date);
    }
  }

  selectDate(d: Date) {
    this.date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    this.weekDays = this.getWeeksInMonth(this.date.getMonth(), this.date.getFullYear());
    this.initYears(this.date);
    this.initMonths(this.date);
    if (this.view === DateView.months) {
      this.view = DateView.days;
    } else if (this.view === DateView.years) {
      this.view = DateView.months;
    }
    else {
      this.selectedDate = this.date;
      this.onChange();
      this.open = false;
    }
  }

  getDaysFromWeek(week: number): any[] {
    return this.weekDays[week];
  }

  changeView() {
    if (this.view === DateView.days) {
      this.view = DateView.months;
    } else if (this.view === DateView.months) {
      this.view = DateView.years;
    }
  }

  wasLastSelected(d: Date) {
    return d.getDate() === this.lastSelectedDate.getDate() && d.getMonth() === this.lastSelectedDate.getMonth();
  }

  onKeyDown($event: KeyboardEvent, date: Date) {
    let newFocusedId: Date;
    switch ($event.key) {
      case 'ArrowDown':
      case 'Down':
        $event.preventDefault();
        newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
        break;
      case 'ArrowUp':
      case 'Up':
        $event.preventDefault();
        newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
        break;
      case 'ArrowLeft':
      case 'Left':
        $event.preventDefault();
        newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
        break;
      case 'ArrowRight':
      case 'Right':
        $event.preventDefault();
        newFocusedId = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        break;
    }

    if (newFocusedId && document.getElementById('' + newFocusedId)) {
      document.getElementById('' + newFocusedId).focus();
      this.lastSelectedDate = newFocusedId;
    }
    else if (newFocusedId) {
      if (newFocusedId < this.date) {
        this.selectLeft();
      } else {
        this.selectRight();
      }
      setTimeout(() => {
        this.lastSelectedDate = newFocusedId;
        document.getElementById('' + newFocusedId).focus();
      }, 0);
    }
  }
}
