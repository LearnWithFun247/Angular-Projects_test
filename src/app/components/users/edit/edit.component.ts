import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactive } from 'src/app/services/guards/authguard-deactivate.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit,IDeactive {

  constructor(private route:ActivatedRoute) { }
  userInfo!:{userName:string,state:string,passout?:number}
  editInfo:any;
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.userInfo = {
        userName: data['name'],
        state: data['state'],
      };
    });
    this.route.queryParams.subscribe((data:Params)=>{
      this.userInfo.passout=data['passout'];
    })
    this.editInfo={...this.userInfo}
  }
  canExit(): boolean | Promise<boolean> | Observable<boolean> {
    if(this.editInfo.userName!=this.userInfo.userName){
    if(confirm('Are you sure you want to exit?')){
      return true;
    }else{
      return false;
    }
  }
    return true;
  }
}
