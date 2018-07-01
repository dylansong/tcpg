import { Actor } from './actor';
import { Store } from 'redux';
import { ActorState,GameState,GameConf } from './interface';



export class Game {
  ctx:CanvasRenderingContext2D;
  canvas:HTMLCanvasElement;
  width:number;
  height:number;
  background:string;
  border:string;
  data:Object;
  state:GameState;
  store:Store
  constructor(canvas:HTMLCanvasElement,gameconf:GameConf,store:Store){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.width = gameconf.width;
    this.height = gameconf.height;
    this.background = gameconf.background;
    this.border = gameconf.border;
    this.state = gameconf.state;
    this.store = store;
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
  show(){
    console.log('he')
  }
  render(){

    this.clear();
    console.log('rendering')
    this.store.getState().actors.forEach(
        (actor:ActorState)=>{
            switch(actor.type){
                case 'rect':
                this.ctx.fillStyle = actor.color;
                this.ctx.fillRect(actor.x,actor.y,actor.width,actor.height);
              }
        }
    )  
    
    
  }
  loop(){
    // this.update();
    requestAnimationFrame(
      this.loop.bind(this))
      this.render()
      console.log('started')
  }
}