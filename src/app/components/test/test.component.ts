import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription,pipe} from 'rxjs';
import{filter, map} from 'rxjs/operators';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnDestroy,OnChanges{
boxData:any="";
message:string=""
mybSubs?:Subscription
count=0;
  constructor() { }

  ngOnInit(): void {
    //promise
    const prom = new Promise((res) => {
      console.log('promise is intiated');
      setTimeout(() => {
        res("Promise is workingggg")
        res("Promise is working twice") 
        res("Promise is working 3")
        res("Promise is working 4") //we cant stream more than one set of data in promise
      }, 2000);
    });
    prom.then((result) => {
      console.log(result);    //promise can emit data even we are not listening to it
    });
    //observable
    const obs=new Observable((res)=>{
      console.log("data 1");
      console.log("data2")
      console.log("data3")
      console.log("data4")   //we can listen to any number of stream of data
      //we can listen to any number of stream of data
      //we can listen to any number of stream of data
    })
    obs.subscribe((res)=>{    //observable cant listen to data if we dont subscribe to it
      console.log(res)
    })

    // let counting = new Observable((res) => {
    //   let counter=0
    //   setInterval(() => {
    //     counter += 1;
    //     res.next(counter);
        
    //   }, 1000);
      
  //   });
  
  //  counting.pipe(filter((res:any)=>res<=5))
  //  .subscribe((res)=>{
  //     console.log(res)
  //     this.count=res;
      
  //   })
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
    if(this.count>10){
      this.mybSubs?.unsubscribe()
          }
  }
  handleAction(e:any){
this.message=e
  }
  ngOnDestroy(): void {
   console.log('hello')
  }

}
