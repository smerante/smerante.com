import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'sam-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  public joinedGame = false;
  public userName: string = '';
  private hostSession: string;
  constructor(private gameService: GameService) { }

  joinGame() {
    if (this.userName != '') {
      this.gameService.joinGame().subscribe((res: any) => {
        if (res == null) {
          console.warn('No Response when trying to join a game, instead will host a game');
          this.gameService.hostGame(this.userName).subscribe((res: HttpResponse<any>) => {
            this.hostSession = res['name'];
            this.joinedGame = true;
            console.warn('Creating game as host ' + this.hostSession);
            this.gameService.updateHostSession(this.hostSession).subscribe((res: any) => {
              console.log('Updated host session: ', res)
            });
          });
        }
        else {
          console.warn('Found sessions: ', res);
          let foundGame = false;
          let gameSession = '';
          Object.keys(res).forEach((k: string) => {
            if (!res[k]['joinName']) {
              foundGame = true;
              gameSession = k;
            }
          });

          if (foundGame) {
            this.gameService.updateGameSession(this.userName, gameSession).subscribe((res: any) => {
              console.log('Updated game session: ', res)
            });
          }
          else {
            console.warn('Cant find empty session, creating game');
            this.gameService.hostGame(this.userName).subscribe((res: HttpResponse<any>) => {
              this.hostSession = res['name'];
              this.joinedGame = true;
              console.warn('Creating game as host ' + this.hostSession);
              this.gameService.updateHostSession(this.hostSession).subscribe((res: any) => {
                console.log('Updated host session: ', res)
              });
            });
          }
        }
      });
    }
  }

  leftGame() {
    this.joinedGame = false;
    this.gameService.leaveGame(!!this.hostSession ? this.hostSession : null).subscribe((res: HttpResponse<any>) => {
    });
  }
}
