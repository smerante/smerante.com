import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameSession } from './GameSession.interface';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  public getGames() {
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
      id: new Date(),
      playersTurn: 'x'
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


  public updatePlayersTurn(sessionId: string, value?: string) {
    return this.httpClient.patch('https://sam-merante.firebaseio.com/game/' + sessionId + '.json',
      { playersTurn: value },
      {
        observe: 'body',
        responseType: 'json'
      });
  }

  public updateBoard(sessionId: string, value?: Array<number> ) {
    return this.httpClient.patch('https://sam-merante.firebaseio.com/game/' + sessionId + '.json',
      { board: value },
      {
        observe: 'body',
        responseType: 'json'
      });
  }

  public getGameSession(sessionId: string): Observable<GameSession> {
    return this.httpClient.get<GameSession>('https://sam-merante.firebaseio.com/game/' + sessionId + '.json')
      .pipe(
        map(res => new GameSession().deserialize(res))
      );
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
