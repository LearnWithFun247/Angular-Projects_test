import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    }
  }
  onBtnClick(): void {
    this.router.navigate(['/']);
  }

}
