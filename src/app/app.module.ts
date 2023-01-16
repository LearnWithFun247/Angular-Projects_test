import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ModifyDirective } from './directives/modify.directive';
import { FormsModule } from '@angular/forms';
import { MyProfileModule } from './components/profile/my-profile/my-profile.module';
import { HomeModule } from './components/home/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ModifyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
