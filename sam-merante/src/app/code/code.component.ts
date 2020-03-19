import { Component, OnInit, HostListener, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @ViewChild('card1', { static: true }) card1: ElementRef;
  @ViewChild('card2', { static: true }) card2: ElementRef;
  @ViewChild('card3', { static: true }) card3: ElementRef;
  @ViewChild('card4', { static: true }) card4: ElementRef;
  @ViewChild('card5', { static: true }) card5: ElementRef;
  @ViewChild('card6', { static: true }) card6: ElementRef;
  @ViewChild('card7', { static: true }) card7: ElementRef;
  @ViewChild('card8', { static: true }) card8: ElementRef;
  @ViewChild('card9', { static: true }) card9: ElementRef;
  @ViewChild('card10', { static: true }) card10: ElementRef;
  @ViewChild('card11', { static: true }) card11: ElementRef;
  @ViewChild('card12', { static: true }) card12: ElementRef;
  @ViewChild('card13', { static: true }) card13: ElementRef;
  @ViewChild('card14', { static: true }) card14: ElementRef;
  @ViewChild('card15', { static: true }) card15: ElementRef;
  @ViewChild('card16', { static: true }) card16: ElementRef;
  @ViewChild('card17', { static: true }) card17: ElementRef;
  @ViewChild('card18', { static: true }) card18: ElementRef;
  @ViewChild('card19', { static: true }) card19: ElementRef;
  @ViewChild('card20', { static: true }) card20: ElementRef;
  @ViewChild('card21', { static: true }) card21: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.scrollCardsIntoView();
  }

  @HostListener('window:scroll', ['$event.target'])
  onScroll() {
    this.scrollCardsIntoView();
  }
  scrollCardsIntoView(){
    if ((this.card1.nativeElement.getBoundingClientRect().top + this.card1.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card1.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card1.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card2.nativeElement.getBoundingClientRect().top + this.card2.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card2.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card2.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card3.nativeElement.getBoundingClientRect().top + this.card3.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card3.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card3.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card4.nativeElement.getBoundingClientRect().top + this.card4.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card4.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card4.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card5.nativeElement.getBoundingClientRect().top + this.card5.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card5.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card5.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card6.nativeElement.getBoundingClientRect().top + this.card6.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card6.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card6.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card7.nativeElement.getBoundingClientRect().top + this.card7.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card7.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card7.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card8.nativeElement.getBoundingClientRect().top + this.card8.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card8.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card8.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card9.nativeElement.getBoundingClientRect().top + this.card9.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card9.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card9.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card10.nativeElement.getBoundingClientRect().top + this.card10.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card10.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card10.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card11.nativeElement.getBoundingClientRect().top + this.card11.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card11.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card11.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card12.nativeElement.getBoundingClientRect().top + this.card12.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card12.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card12.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card13.nativeElement.getBoundingClientRect().top + this.card13.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card13.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card13.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card14.nativeElement.getBoundingClientRect().top + this.card14.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card14.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card14.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card15.nativeElement.getBoundingClientRect().top + this.card15.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card15.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card15.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card16.nativeElement.getBoundingClientRect().top + this.card16.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card16.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card16.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card17.nativeElement.getBoundingClientRect().top + this.card17.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card17.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card17.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card18.nativeElement.getBoundingClientRect().top + this.card18.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card18.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card18.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card19.nativeElement.getBoundingClientRect().top + this.card19.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card19.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card19.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card20.nativeElement.getBoundingClientRect().top + this.card20.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card20.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card20.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
    if ((this.card21.nativeElement.getBoundingClientRect().top + this.card21.nativeElement.getBoundingClientRect().height/2)  <= window.innerHeight) {
      this.renderer.addClass(this.card21.nativeElement, 'card__show');
      setTimeout(
        () => {
          this.renderer.addClass(this.card21.nativeElement, 'card__show--come-in');
        }, 100
      )
    }
  }
}
