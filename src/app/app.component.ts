import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,private router:Router){}
  title = 'angular-playground';
  isLoggedIn:boolean = false;
  ngOnInit() {
   if(localStorage.getItem('isLoggedIn')){
    this.isLoggedIn=Boolean(localStorage.getItem('isLoggedIn'));
    console.log(this.isLoggedIn);
    
   }else{
    this.isLoggedIn=false;
   }
  }
  logIn(){
    this.authService.isUserLoggedIn();
    this.isLoggedIn=true;
    localStorage.setItem('isLoggedIn',JSON.stringify(this.isLoggedIn));
    alert('You are now logged In')
    this.router.navigate(['/users'])

  }
  logOut(){
    if(localStorage.getItem('isLoggedIn')){
    this.authService.isUserLoggedOut();
    this.isLoggedIn=false;
    localStorage.removeItem('isLoggedIn');
    alert('You are now Logged Out')
    this.router.navigate(['/'])
  }
}
}
