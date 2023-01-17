import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userInfo!:{name:string,state:string,passout?:number}
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
    this.route.queryParams.subscribe(data=>{
    this.userInfo.passout=data['passout']
    })
  }
  onEdit(){
    //when you want to preserve the existing queryParams on next routing
    // this.router.navigate(['/users',this.userInfo.name,this.userInfo.state,'edit'],{queryParams:{edit:true},queryParamsHandling:'preserve'}
    //when you want to add a new queryParams with existing ones
    this.router.navigate(['/users',this.userInfo.name,this.userInfo.state,'edit'],{queryParams:{edit:true},queryParamsHandling:'merge'}

    )
  }

}
