import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { MyProfileComponent } from './components/profile/my-profile/my-profile.component';

const routes: Routes = [{
  path:'',loadChildren:()=>import('./components/home/home/home.module').then((m)=>m.HomeModule)
},
{path:'new-cars',loadChildren:()=>import('./components/stock-locator/stock-locator/stock-locator.module').then((m)=>m.StockLocatorModule)},
{path:'profile',loadChildren:()=>import('./components/profile/my-profile/my-profile.module').then((m)=>m.MyProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
