import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import { AuthguardDeactivateService } from 'src/app/services/guards/authguard-deactivate.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {path: ':name/:state',component:UserComponent},
      {path: ':name/:state/edit',component:EditComponent,canDeactivate:[AuthguardDeactivateService]}
    ]
  }
];

@NgModule({
  declarations: [UsersComponent, UserComponent, EditComponent],
  imports: [CommonModule, RouterModule.forChild(routes),FormsModule],
})
export class UsersModule {}
