import { GameConf,ActorState } from './interface';
import { Actor } from './actor';



export class Game {
  ctx:CanvasRenderingContext2D;
  canvas:HTMLCanvasElement;
  width:number;
  height:number;
  background:string;
  border:string;
  data:Object;
  actors:Actor[];
  constructor(canvas:HTMLCanvasElement,gameconf:GameConf){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.width = gameconf.width;
    this.height = gameconf.height;
    this.background = gameconf.background;
    this.border = gameconf.border;
    this.actors = [];
    this.init();
  }
  init(){
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.background = this.background;
    this.canvas.style.border = this.border;
  }
  clear(){
    this.ctx.clearRect(0,0,this.width,this.height);

  }
  addActor(actor:Actor){
    this.actors.push(actor);
  }
  moveEveryThing(){

  }
  render(){
    this.clear();
    this.actors.forEach((actor)=>{
      let state = actor.state;
      switch(state.type){
        case 'rect':
        this.ctx.fillStyle = state.color;
        this.ctx.fillRect(state.x,state.y,state.width,state.height);
        break;
        case 'image':
        let img = new Image();
        img.src = state.imgsrc;
        this.ctx.drawImage(img,state.x,state.y,state.width,state.height);
        break;
        default:
        return;
      }
    })
  }
  startUpdate(){
    this.actors.forEach((actor)=>actor.update());
  }
  startLoop(){
    this.render()
    requestAnimationFrame(
      this.startLoop.bind(this))
      // console.log('started')
  }
}