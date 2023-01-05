import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
boxData:any="";
message:string=""
  constructor() { }

  ngOnInit(): void {
  }
  handleAction(e:any){
this.message=e
  }

}
