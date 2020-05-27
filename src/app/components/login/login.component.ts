import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  errorMessage: string
  isLoading: boolean

  constructor(private authService: AuthService, private fb: FormBuilder,private router: Router,private tokenService:TokenService) { }

  ngOnInit() {
    this.init();
  }
  init() {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    })
  }

  loginUser(){
    console.log(this.loginForm.value)
    this.isLoading = true
    this.authService.loginUser(this.loginForm.value).subscribe(res => {
      console.log('Loggedin Successfully',res)
      setTimeout(() => {
        this.tokenService.SetToken(res.token)
        this.isLoading= false
        this.loginForm.reset()
        this.router.navigate(['dashboard'])
      },1000)
    }, err => {
      console.log(err)
      this.isLoading = false
      if(err.error.msg){
        this.errorMessage = err.error.msg[0].message
      }
      if(err.error.message){
        this.errorMessage = err.error.message
      }

    })
  }

}
