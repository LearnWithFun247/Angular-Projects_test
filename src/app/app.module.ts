import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ModifyDirective } from './directives/modify.directive';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthguardDeactivateService } from './services/guards/authguard-deactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ModifyDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuardService,AuthguardDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
