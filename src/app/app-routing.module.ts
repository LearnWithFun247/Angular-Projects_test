import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'new-cars',
    loadChildren: () =>
      import(
        './components/stock-locator/stock-locator/stock-locator.module'
      ).then((m) => m.StockLocatorModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./components/profile/my-profile/my-profile.module').then(
        (m) => m.MyProfileModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./components/users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./components/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
