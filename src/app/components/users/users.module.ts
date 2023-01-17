import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [{path: ':name/:state',component:UserComponent}]
  }
];

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersModule {}
