import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'compnents-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponents implements OnInit {

  disabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
