import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/services/token.service';
import { GlobalService } from 'src/app/services/global.service';
import { SocketService } from 'src/app/services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private tokenService: TokenService,
              private global: GlobalService,
              private socket: SocketService,
              private toastr: ToastrService,
              private router: Router) { }
  name:string 
  ngOnInit() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    this.name= this.tokenService.GetPayload().data.firstname + " " +this.tokenService.GetPayload().data.lastname  
  }
  create(){
    this.global.updateAlert().subscribe(data=>{
      this.toastr.success('Alert created!','Notification');
      this.socket.emit('refresh',{})
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
