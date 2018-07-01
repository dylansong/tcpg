

export interface ActorState {
  id:string
  type:string
  x:number
  y:number
  src?:string
  width?:number
  height?:number
  gravity?:number
  speed?:number
  zoom?:number
  color?:string
  data?:Object
}


export interface GameState {
  status:string
  actors:ActorState[]
}

export interface GameConf {
  width:number
  height:number
  background:string
  border:string
  state:GameState
}
  
