import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggle: boolean;
  breakpointSize = 768;
  scrollDown = false;
  currentScrollOffset = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.toggle = false;
  }

  openNav() {
    if (window.innerWidth < this.breakpointSize) {
      this.toggle = !this.toggle;
    }
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        window.scrollTo(0, 0)
      }
    });
  }

  @HostListener('document:scroll')
  onScroll() {
    this.scrollDown = !this.toggle && this.currentScrollOffset < window.pageYOffset ? true : false;
    this.currentScrollOffset = window.pageYOffset;
  };
}
