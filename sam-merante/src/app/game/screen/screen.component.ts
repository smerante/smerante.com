import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'game-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  private board = [];

  private playersTurn: boolean;
  private playerWon: boolean;
  private playersWinMessage: any;

  @Input('hostSession') hostSession: string;
  @Input('playersName') name: string;
  @Output() leave: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    this.board = [
      -1, -1, -1,
      -1, -1, -1,
      -1, -1, -1
    ];
    this.playersTurn = false;
    this.playerWon = false;
  }

  pressButton(index: number) {
    let letter = this.playersTurn ? 0 : 1;
    this.playersTurn = !this.playersTurn;
    this.board[index] = letter;
    this.playerWon = this.checkWinState() == false ? false : true;
    if (this.playerWon) {
      this.playersWinMessage = this.checkWinState();
    }
  }

  checkWinState() {
    if (this.state(0) == 0 && this.state(1) == 0 && this.state(2) == 0) {
      return 'O is the winner';
    }
    if (this.state(3) == 0 && this.state(4) == 0 && this.state(5) == 0) {
      return 'O is the winner';
    }
    if (this.state(6) == 0 && this.state(7) == 0 && this.state(8) == 0) {
      return 'O is the winner';
    }
    if (this.state(0) == 0 && this.state(4) == 0 && this.state(8) == 0) {
      return 'O is the winner';
    }
    if (this.state(2) == 0 && this.state(4) == 0 && this.state(6) == 0) {
      return 'O is the winner';
    }
    if (this.state(0) == 0 && this.state(3) == 0 && this.state(6) == 0) {
      return 'O is the winner';
    }
    if (this.state(1) == 0 && this.state(4) == 0 && this.state(7) == 0) {
      return 'O is the winner';
    }
    if (this.state(2) == 0 && this.state(5) == 0 && this.state(8) == 0) {
      return 'O is the winner';
    }


    if (this.state(0) == 1 && this.state(1) == 1 && this.state(2) == 1) {
      return 'X is the winner';
    }
    if (this.state(3) == 1 && this.state(4) == 1 && this.state(5) == 1) {
      return 'X is the winner';
    }
    if (this.state(6) == 1 && this.state(7) == 1 && this.state(8) == 1) {
      return 'X is the winner';
    }
    if (this.state(0) == 1 && this.state(4) == 1 && this.state(8) == 1) {
      return 'X is the winner';
    }
    if (this.state(2) == 1 && this.state(4) == 1 && this.state(6) == 1) {
      return 'X is the winner';
    }
    if (this.state(0) == 1 && this.state(3) == 1 && this.state(6) == 1) {
      return 'X is the winner';
    }
    if (this.state(1) == 1 && this.state(4) == 1 && this.state(7) == 1) {
      return 'X is the winner';
    }
    if (this.state(2) == 1 && this.state(5) == 1 && this.state(8) == 1) {
      return 'X is the winner';
    }

    return false;
  }

  state(index: number) {
    return this.board[index]
  }


  leaveGame() {
    this.leave.emit();
  }

  ngOnDestroy(): void {
    this.leave.emit();
  }
}

