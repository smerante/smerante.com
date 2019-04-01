import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, Message } from './message.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  loggedIn: boolean;

  constructor(private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

  messages: Message[];

  ngOnInit() {
    this.loggedIn = this.auth.isVerified();
    console.log('user verified and logged in :', this.loggedIn);
    if (this.loggedIn) {
      this.router.navigate(['authenticated'], { relativeTo: this.route });
    }
    this.messages = [];
    this.reloadMessages();
  }

  goTo(page: string) {
    this.router.navigate(['/' + page]);
  }

  logout(){
    this.auth.logout();
  }

  reloadMessages() {
    this.messageService.getMessage().subscribe(
      (res: Message[]) => {
        if (res) {
          this.messages = [];
          console.log(res);
          Object.keys(res).forEach((k: string) => {
            this.messages.push({
              ...res[k], key: k
            })
          });
          this.messages.reverse();
        }
      });
  }
}
