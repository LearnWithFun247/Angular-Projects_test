import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn:boolean = false;
  constructor() { }
  isUserLoggedIn():boolean{
   return this.isLoggedIn=true;
  }
  isUserLoggedOut():boolean{
   return this.isLoggedIn=false
  }
  isAuthenticated():boolean{
    return this.isLoggedIn;
  }
}
