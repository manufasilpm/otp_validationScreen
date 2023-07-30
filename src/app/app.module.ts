import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import * as bcrypt from 'bcryptjs';
import { UserScreenComponent } from './components/user-screen/user-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';

@NgModule({
  declarations: [AppComponent, UserScreenComponent, LoginScreenComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule ,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
