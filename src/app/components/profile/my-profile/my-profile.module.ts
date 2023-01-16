import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { Routes,RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component: MyProfileComponent}
]


@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class MyProfileModule {
  constructor(){
    console.log("My profile module");
    
  }
 }
