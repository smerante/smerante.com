export class GameSession {

  public hostName: string;
  public id: Date;
  public joinName: string;
  public playersTurn: string;
  public sessionId: number;
  public board: Array<number> = [];


  deserialize(input: any) {
    Object.assign(<any>this, input);
    return this;
  }
}