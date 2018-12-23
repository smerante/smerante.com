import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  date = new Date();
  toggle: boolean;
  @ViewChild('navMenu') navMenu: ElementRef;

  ngOnInit(): void {
    this.toggle = false;
    this.navMenu.nativeElement.className = 'navbar-collapse collapse';
  }

  openNav(){
    this.toggle=!this.toggle;
    if(this.toggle){
      this.navMenu.nativeElement.className = 'navbar-collapse collapsing';
      setTimeout(()=>{
        this.navMenu.nativeElement.className = 'navbar-collapse collapsing expanding';
      },0);
      setTimeout(()=>{
        this.navMenu.nativeElement.className = 'navbar-collapse collapse show';
      },300);
    }else{
      this.navMenu.nativeElement.className = 'navbar-collapse collapsing expanding';
      setTimeout(()=>{
        this.navMenu.nativeElement.className = 'navbar-collapse collapsing closing';
      },0);
      setTimeout(()=>{
        this.navMenu.nativeElement.className = 'navbar-collapse collapse';
      },300);
    }
  }

  //[ngClass]="toggle ? 'collapse navbar-collapse collapsing show' : 'collapse navbar-collapse'" 
}
