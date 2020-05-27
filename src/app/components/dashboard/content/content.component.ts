import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { TokenService } from 'src/app/services/token.service';
import { GlobalService } from 'src/app/services/global.service';
import { SocketService } from 'src/app/services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  alerts: number = 0;
  constructor(private tokenService: TokenService,
              private global: GlobalService,
              private socket: SocketService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.init()
    this.socket.On('refreshPage').subscribe(() =>{
      this.init();
    })
  }
  init(){
    this.global.fetchAlert().subscribe((alert) => {
      this.alerts = alert.alerts.totalAlerts;
    }, err=>{
      this.toastr.error('Unknown Error Occured!!','Notification');
      this.logout();
    })
  }
  

logout(){
  this.tokenService.DeleteToken()
  this.router.navigate([''])
}
}
