import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Observable, observable, Subscription, Subject } from 'rxjs';
import { Observer } from 'firebase';
import { timeout } from 'rxjs/operators';

// export interface Message {
//   message: string,
//   date: Date,
//   email?: string,
//   key? : string
// }

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private testSubject: Subject<boolean> = new Subject();
  constructor(private httpClient: HttpClient) { }
  // this.authSerivce.token

  public joinGame() {
    return this.httpClient.get<{ name: string, id: Date, sessionId: number, joinName?: string }[]>('https://sam-merante.firebaseio.com/game.json',
      {
        observe: 'body',
        responseType: 'json'
      }
    )
  }

  public hostGame(userName: string) {
    let newSession = {
      hostName: userName,
      id: new Date()
    }
    return this.httpClient.post('https://sam-merante.firebaseio.com/game.json',
      newSession,
      {
        observe: 'body',
        responseType: 'json'
      });
  }

  public updateGameSession(userName: string, sessionId: string) {
    return this.httpClient.patch('https://sam-merante.firebaseio.com/game/' + sessionId + '.json',
      { joinName: userName },
      {
        observe: 'body',
        responseType: 'json'
      });
  }


  public updateHostSession(sessionId: string) {
    return this.httpClient.patch('https://sam-merante.firebaseio.com/game/' + sessionId + '.json',
      { sessionId: sessionId },
      {
        observe: 'body',
        responseType: 'json'
      });
  }

  public leaveGame(hostSession?: string) {
    if (hostSession) {
      return this.httpClient.delete('https://sam-merante.firebaseio.com/game/' + hostSession + '.json',
      );
    }
  }

  // postMessage(data: any, token: string) {
  //   let httpParams = new HttpParams()
  //     .append('auth', token);

  //   return this.httpClient.post('https://sam-merante.firebaseio.com/messages.json',
  //     data,
  //     {
  //       observe: 'body',
  //       responseType: 'json',
  //       params: httpParams
  //     });
  // }

  // getMessage() {
  //   return this.httpClient.get<Message[]>('https://sam-merante.firebaseio.com/messages.json',
  //     {
  //       observe: 'body',
  //       responseType: 'json'
  //     }
  //   )
  // }
}
