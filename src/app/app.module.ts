import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { TokenInterceptor } from './services/token-interceptor.service';
import { ContentComponent } from './components/dashboard/content/content.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 600,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }) 
  ],
  providers: [AuthService,TokenService,{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
