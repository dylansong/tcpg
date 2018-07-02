


export interface GameConf {
  width:number
  height:number
  background:string
  border:string
}
  


export interface ActorState {
  type:string
  x:number
  y:number
  width:number
  height:number
  color:string
  speed?:number
  gravity?:number
  imgsrc?:string
}