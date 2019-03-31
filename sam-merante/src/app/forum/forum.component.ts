import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
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
