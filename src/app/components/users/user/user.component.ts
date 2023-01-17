import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userInfo!:{name:string,state:string}
  constructor(private router:Router,private route:ActivatedRoute) { 
    console.log("user component loadinf");
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.userInfo={
        name:data['name'],
        state:data['state']
      }
    })
  }

}
