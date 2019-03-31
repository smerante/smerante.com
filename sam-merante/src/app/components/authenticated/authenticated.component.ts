import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'compnents-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponents implements OnInit {

  disabled: boolean = true;
  checkVal1: boolean = false;
  checkVal2: boolean = false;
  checkVal3: boolean = false;
  toggleVal1: boolean = false;
  toggleVal2: boolean = false;
  toggleVal3: boolean = false;
  constructor() { }

  ngOnInit() {
  }


}
