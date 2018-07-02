import { ActorState } from './interface/index';

export class Actor {
  ctx:CanvasRenderingContext2D;
  state:ActorState;
  constructor(ctx:CanvasRenderingContext2D,state:ActorState){
    this.ctx = ctx;
    this.state = state;
  }
  update(){
    let state = this.state;
    if(state.x>=500-state.width || state.y>=500-state.height || state.x<=0 || state.y<=0 ){
      state.speed*=-1;
      state.gravity*=-1;
    }
    this.state.x+=this.state.speed;
    this.state.y+=this.state.gravity;
    requestAnimationFrame(this.update.bind(this))
  }
}