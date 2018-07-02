import { GameConf, ActorState } from './lib/interface/index';
import { Game } from './lib/game';
import { Actor } from './lib/actor';
import { createStore, Action } from 'redux';








const paddleGameConf:GameConf = {
  width:500,height:500,background:'white',border:'1px dotted black'
}

const canvas = document.querySelector('canvas');
const paddleGame = new Game(canvas,paddleGameConf);


const redInitialState:ActorState = {
  type:'image',
  x:200,
  y:200,
  width:150,
  height:150,
  color:'red',
  speed:5,
  gravity:2,
  imgsrc:'https://target.scene7.com/is/image/Target/52702455_Alt01?wid=488&hei=488&fmt=pjpeg'
}



const redRect = new Actor(paddleGame.ctx,redInitialState)
paddleGame.addActor(redRect);





for(let i=1;i<20;i++){
  let blippiInitialState:ActorState = {
    type:'image',
    x:Math.random()*500,
    y:Math.random()*500,
    width:50,
    height:50,
    color:'red',
    speed:3,
    gravity:5,
    imgsrc:'https://i.pinimg.com/736x/ba/7c/d2/ba7cd207c8bba84cc175cc8aeaca1753--programming-parents.jpg'
  }
  let blippi = new Actor(paddleGame.ctx,blippiInitialState)
  paddleGame.addActor(blippi);
}

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click',()=>{
  paddleGame.startUpdate();
  paddleGame.startLoop();
})


