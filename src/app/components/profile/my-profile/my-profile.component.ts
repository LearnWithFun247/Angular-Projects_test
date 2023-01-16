import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
users!:{id:number;name:string}
  constructor(private router:Router,private route:ActivatedRoute) { 
    console.log("My Profile is working..");
    
  }

  ngOnInit(): void {
    this.users={
    id:this.route.snapshot.params['id'],
    name:this.route.snapshot.params['name']
    };
    //to listen the route data dynamically when you want to get data from same component
    this.route.params.subscribe((data:Params)=>{
      this.users={
        id:data['id'],
        name:data['name']
        };
    })
  }
  onBtnClick(): void {
    this.router.navigate(['/']);
  }

  getInfo(){
    // this.router.navigate(['/profile/202/Nagaraj']) one way
    this.router.navigate(['/profile',202,'Nagaraj'],{queryParams:{page:1,search:'Nagaraj'},fragment:'loading'});//second way
  }
}
