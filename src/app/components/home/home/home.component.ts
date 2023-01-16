import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userName!:string;
isMoveahead=false;
userId!:number;
  constructor(private router:Router) { 
    console.log("Home is working..");
  }

  ngOnInit(): void {
    console.log('Hello');
    
  }
  remainHere(){
    this.isMoveahead=false;
    this.router.navigate(['']);
  }
  proceedForward(){
    this.isMoveahead=true;

  }
  navigateToProfile(){
    if(this.isMoveahead && this.userName){
      this.router.navigate([`/profile/${this.userId}/${this.userName}`])
    }else{
      alert('please enter username or ID')
    }
  }

}
