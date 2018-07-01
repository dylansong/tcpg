import { ActorState } from './interface';

export class Actor {
  ctx:CanvasRenderingContext2D;
  state:ActorState;
  constructor(ctx:CanvasRenderingContext2D,state: ActorState){
    this.ctx = ctx;
    this.state = state;
  }
}