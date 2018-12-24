import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {

  toggleCards: boolean[];

  constructor() {
    this.toggleCards = [true, false, false, false];
  }

  ngOnInit() {
  }

  toggleCard(i: number) {
    this.toggleCards.forEach(
      (val: boolean, index: number) => {
        this.toggleCards[index] = false;
        if (index === i)
        this.toggleCards[index] = true;
      }
    );
  }
}
