import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ModifyDirective } from './directives/modify.directive';
import { FormsModule } from '@angular/forms';
import { StructuralDirective } from './directives/structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ModifyDirective,
    StructuralDirective
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
