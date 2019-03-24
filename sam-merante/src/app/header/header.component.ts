import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggle: boolean;
  @ViewChild('navMenu') navMenu: ElementRef;

  ngOnInit(): void {
    this.toggle = false;
    this.navMenu.nativeElement.className = 'navbar-collapse collapse';
  }

  openNav() {
    this.toggle = !this.toggle;
    if (window.innerWidth < 992) {
      if (this.toggle) {
        this.navMenu.nativeElement.className = 'navbar-collapse collapsing';
        setTimeout(() => {
          this.navMenu.nativeElement.className = 'navbar-collapse collapsing expanding';
        }, 0);
        setTimeout(() => {
          this.navMenu.nativeElement.className = 'navbar-collapse collapse show';
        }, 300);
      } else {
        this.navMenu.nativeElement.className = 'navbar-collapse collapsing expanding';
        setTimeout(() => {
          this.navMenu.nativeElement.className = 'navbar-collapse collapsing closing';
        }, 0);
        setTimeout(() => {
          this.navMenu.nativeElement.className = 'navbar-collapse collapse';
        }, 300);
      }
    }
  }

}
