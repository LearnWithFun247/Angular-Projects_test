import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeactive } from 'src/app/services/guards/authguard-deactivate.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit,IDeactive {

  constructor() { }

  ngOnInit(): void {
  }
  canExit(): boolean | Promise<boolean> | Observable<boolean> {
    if(confirm('Are you sure you want to exit?')){
      return true;
    }else{
      return false;
    }
  }
}
