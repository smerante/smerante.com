import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  loggedIn: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.auth.isVerified();
    console.log('user verified and logged in :', this.loggedIn);
    }

  goTo(page: string) {
    this.router.navigate(['/' + page ]);
  }
}
