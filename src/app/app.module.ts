import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ROUTES } from './app.routes';
import { InstructorsComponent } from './instructors/instructors.component';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RoleGuardService } from './auth/role-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InstructorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuardService,
    RoleGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
