import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket:any
  constructor() {
    var connectionOptions =  {
      "force new connection" : true,
      "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
      "timeout" : 10000,                  //before connect_error and connect_timeout are emitted.
      "transports" : ["websocket"]
  };
    this.socket = io('http://localhost:3000',connectionOptions)
   }
  On(event):any{
    const OnObservable = new Observable((observer)=>{
      this.socket.on(event,data=>{
        observer.next(data)
      })
    })
    return OnObservable
  }
  emit(event,data){
    this.socket.emit(event,data)  
  }
}
