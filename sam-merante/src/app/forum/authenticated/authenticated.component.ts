import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService, Message } from '../message.service';
import { AuthService } from '../../auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'compnents-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponents implements OnInit {

  messageForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private authSerivce: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.messageForm = new FormGroup(
      {
        'message': new FormControl('', Validators.required)
      })
  }

  submitMessage() {
    if (this.messageForm.valid) {
      let data: Message =
      {
        message: this.messageForm.get('message').value,
        date: new Date(),
        email: this.authSerivce.email
      };

      this.messageService.postMessage(data, this.authSerivce.token).subscribe(
        (res: HttpResponse<'json'>) => {
          console.log(res);
        }
      );
      this.messageForm.reset();
    }
  }
}
