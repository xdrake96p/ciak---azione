import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavLateraleComponent } from './nav-laterale/nav-laterale.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { FilmComponent } from './film/film.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { AddfilmComponent } from './addfilm/addfilm.component';
import { CouponComponent } from './coupon/coupon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    NavLateraleComponent,
    ContainerComponent,
    LoginComponent,
    AdminComponent,
    FilmComponent,
    PrenotazioniComponent,
    AddfilmComponent,
    CouponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
