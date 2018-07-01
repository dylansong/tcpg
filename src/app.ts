import { GameState,GameConf,ActorState } from './lib/interface/index';
import { Game } from './lib/game';
import { Actor } from './lib/actor';
import { createStore, Action } from 'redux';



function makeInitialState():GameState{
  return {
    status:'start',
    actors:[{
      id:'rect1',
      type:'rect',
      x:50,
      y:50,
      src:'',
      width:50,
      height:50,
      gravity:1,
      speed:1,
      zoom:2,
      color:'blue',
      data:{}
    }]
  }
}



function gameTree(state=makeInitialState(),action:Action){
  switch(action.type){
    case 'start':
    state.status = 'start';
    return state;
    case 'right':
    state.actors[0].x++;
    return state;
    case 'left':
    state.actors[0].x--;
    return state;
    default:
    return state
  }    
}

const store = createStore(gameTree);

const paddleGameConf:GameConf = {
  width:500,height:500,background:'white',border:'1px dotted black',state:makeInitialState()
}

const canvas = document.querySelector('canvas');
const paddleGame = new Game(canvas,paddleGameConf,store);
paddleGame.init();
store.subscribe(paddleGame.render.bind(paddleGame));

function loop(){
  console.log('h')
  if(store.getState().actors[0].x<=0){
    store.dispatch({type:'right'});
  }else if(store.getState().actors[0].x>=500){
    store.dispatch({type:'left'});
  }else{
    store.dispatch({type:'right'});
  }
  requestAnimationFrame(loop)

}

// loop()





