import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  loggedIn: boolean;

  constructor(private auth: AuthService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedIn = this.auth.isVerified();
    console.log('user verified and logged in :', this.loggedIn);
    if (this.loggedIn) {
      this.router.navigate(['authenticated'], {relativeTo: this.route});
    }
  }

  goTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}