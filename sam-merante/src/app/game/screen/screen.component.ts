import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GameService } from '../game.service';
import { GameSession } from '../GameSession.interface';
import { interval, Subscription } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'game-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  board: Array<number> = [];

  playerXTurn: boolean; //0 = o; 1 = x;
  playerWon: boolean;
  yourTurn: boolean = false;
  playersWinMessage: any;
  opponentsName: string;

  gameSessionSub: Subscription;

  @Input('hostSession') sessionId: string;
  @Input('playersName') name: string;
  @Input('player') player: string;
  @Input('hosting') hosting: boolean;


  xName: string = 'Unknown';
  oName: string = 'Unknown';
  @Output() leave: EventEmitter<void> = new EventEmitter();

  constructor(private gameService: GameService) { };

  ngOnInit() {
    this.board = [
      -1, -1, -1,
      -1, -1, -1,
      -1, -1, -1
    ];
    if (this.hosting) {
      this.gameService.updateBoard(this.sessionId, this.board).subscribe((res: any) => {
        console.warn('Updated board: ', res);
      });
    }
    this.playerXTurn = false;
    this.playerWon = false;
    this.gameSessionSub = interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.gameService.getGameSession(this.sessionId))
      )
      .subscribe((res: GameSession) => {
        console.warn(res);
        if (res.hostName == undefined &&
          res.id == undefined &&
          res.joinName == undefined &&
          res.playersTurn == undefined &&
          res.sessionId == undefined) {
          this.leaveGame();
        }

        if (res.board.length > 0) {
          this.board = res.board;
          console.warn('geting updated board');
          this.playerWon = this.checkWinState() == false ? false : true;
          if (this.playerWon) {
            this.playersWinMessage = this.checkWinState();
            setTimeout(() => {
              this.leaveGame();
            }, 5000);
          }
        }

        if (this.hosting) {
          this.opponentsName = res.joinName;
          this.oName = this.opponentsName ? this.opponentsName : 'Unknown';
          this.xName = this.name ? this.name : 'Unknown';
        } else {
          this.opponentsName = res.hostName;
          this.xName = this.opponentsName ? this.opponentsName : 'Unknown';
          this.oName = this.name ? this.name : 'Unknown';
        }

        if (this.hosting && res.playersTurn === 'x') {
          this.yourTurn = true;
          this.playerXTurn = true;
        } else if (this.hosting && res.playersTurn === 'o') {
          this.yourTurn = false;
          this.playerXTurn = false;
        } else if (!this.hosting && res.playersTurn === 'x') {
          this.yourTurn = false;
          this.playerXTurn = true;
        } else if (!this.hosting && res.playersTurn === 'o') {
          this.yourTurn = true;
          this.playerXTurn = false;
        }
      });
  }

  pressButton(index: number) {
    if (this.hosting) {
      this.yourTurn = false;
      this.gameService.updatePlayersTurn(this.sessionId, 'o').subscribe((res: any) => {
        console.warn('Next players turn: ', res);
      });
    } else {
      this.yourTurn = false;
      this.gameService.updatePlayersTurn(this.sessionId, 'x').subscribe((res: any) => {
        console.warn('Next players turn: ', res);
      });
    }
    let letter = this.playerXTurn ? 1 : 0;
    this.playerXTurn = !this.playerXTurn;
    this.board[index] = letter;
    this.playerWon = this.checkWinState() == false ? false : true;
    if (this.playerWon) {
      this.playersWinMessage = this.checkWinState();
    }
    this.gameService.updateBoard(this.sessionId, this.board).subscribe((res: any) => {
      console.warn('Updated board: ', res);
    });
  }

  checkWinState() {
    if (this.state(0) == 0 && this.state(1) == 0 && this.state(2) == 0) {
      return this.oName + ' is the winner';
    }
    if (this.state(3) == 0 && this.state(4) == 0 && this.state(5) == 0) {
      return this.oName + ' is the winner';
    }
    if (this.state(6) == 0 && this.state(7) == 0 && this.state(8) == 0) {
      return this.oName + ' is the winner';
    }
    if (this.state(0) == 0 && this.state(4) == 0 && this.state(8) == 0) {
      return this.oName + ' is the winner';
    }
    if (this.state(2) == 0 && this.state(4) == 0 && this.state(6) == 0) {
      return this.oName + ' is the winner';
    }
    if (this.state(0) == 0 && this.state(3) == 0 && this.state(6) == 0) {
      return this.oName + ' is the winner';
    }
    if (this.state(1) == 0 && this.state(4) == 0 && this.state(7) == 0) {
      return this.oName + ' is the winner';
    }
    if (this.state(2) == 0 && this.state(5) == 0 && this.state(8) == 0) {
      return this.oName + ' is the winner';
    }


    if (this.state(0) == 1 && this.state(1) == 1 && this.state(2) == 1) {
      return this.xName + ' is the winner';
    }
    if (this.state(3) == 1 && this.state(4) == 1 && this.state(5) == 1) {
      return this.xName + ' is the winner';
    }
    if (this.state(6) == 1 && this.state(7) == 1 && this.state(8) == 1) {
      return this.xName + ' is the winner';
    }
    if (this.state(0) == 1 && this.state(4) == 1 && this.state(8) == 1) {
      return this.xName + ' is the winner';
    }
    if (this.state(2) == 1 && this.state(4) == 1 && this.state(6) == 1) {
      return this.xName + ' is the winner';
    }
    if (this.state(0) == 1 && this.state(3) == 1 && this.state(6) == 1) {
      return this.xName + ' is the winner';
    }
    if (this.state(1) == 1 && this.state(4) == 1 && this.state(7) == 1) {
      return this.xName + ' is the winner';
    }
    if (this.state(2) == 1 && this.state(5) == 1 && this.state(8) == 1) {
      return this.xName + ' is the winner';
    }

    return false;
  }

  state(index: number) {
    return this.board[index]
  }


  leaveGame() {
    this.gameSessionSub.unsubscribe();
    this.leave.emit();
  }

  ngOnDestroy(): void {
    this.gameSessionSub.unsubscribe();
    this.leave.emit();
  }
}

