import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockLocatorComponent } from './stock-locator.component';
import { Routes ,RouterModule} from '@angular/router';


const Routes:Routes=[
  {path:'',component: StockLocatorComponent}
]


@NgModule({
  declarations: [StockLocatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ],
})
export class StockLocatorModule {
  constructor(){
    console.log("Stock-locator Module");
    
  }
 }
