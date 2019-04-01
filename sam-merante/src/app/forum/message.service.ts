import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

export interface Message {
  message: string,
  date: Date,
  email?: string,
  key? : string
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  constructor(private httpClient: HttpClient) { }

  postMessage(data: Message, token: string) {
    let httpParams = new HttpParams()
      .append('auth', token);

    return this.httpClient.post('https://sam-merante.firebaseio.com/messages.json',
      data,
      {
        observe: 'body',
        responseType: 'json',
        params: httpParams
      });
  }

  getMessage() {
    return this.httpClient.get<Message[]>('https://sam-merante.firebaseio.com/messages.json',
      {
        observe: 'body',
        responseType: 'json'
      }
    )
  }
}
