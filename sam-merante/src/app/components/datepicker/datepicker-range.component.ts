import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

enum DateView {
  days = 0,
  months = 1,
  years = 2
}

@Component({
  selector: 'sam-datepicker-range',
  templateUrl: './datepicker-range.component.html',
  styleUrls: ['./datepicker.component.scss'],
  host: { 'class': 'sam-datepicker-component' }
})
export class DatePickerRangeComponent implements OnInit {

  @Input('fromDate') selectedFromDate: Date = new Date();
  @Output() fromDateChange: EventEmitter<any> = new EventEmitter();

  @Input('toDate') selectedToDate: Date = new Date();
  @Output() toDateChange: EventEmitter<any> = new EventEmitter();

  selectingDate: number;
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
    this.selectingDate = 0;
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
    if (this.selectingDate === 0) {
      this.selectingDate = 1;
      this.fromDateChange.emit(this.selectedFromDate);
    }
    else if (this.selectingDate === 1) {
      this.selectingDate = 0;
      this.toDateChange.emit(this.selectedToDate);
    }
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
      if (this.selectingDate == 0) {
        this.selectedFromDate = this.date;
      }
      else {
        this.selectedToDate = this.date;
      }
      this.onChange();
      this.open = false;
    }
    this.lastSelectedDate = this.date;
    setTimeout(() => {
      document.getElementById('' + this.lastSelectedDate).focus();
    }, 0);
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

  dSelected(d: Date) {
    return (d.getDate() === this.selectedFromDate.getDate() && d.getMonth() === this.selectedFromDate.getMonth()) ||
    (d.getDate() === this.selectedToDate.getDate() && d.getMonth() === this.selectedToDate.getMonth());
  }

  inRange(d: Date) {
    return (this.selectedFromDate <= d && d <= this.selectedToDate);
  }
}
