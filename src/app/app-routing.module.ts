import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { filter } from 'rxjs';
import { AddfilmComponent } from './addfilm/addfilm.component';
import { AdminComponent } from './admin/admin.component';
import { ContainerComponent } from './container/container.component';
import { CouponComponent } from './coupon/coupon.component';
import { FilmComponent } from './film/film.component';
import { LoginComponent } from './login/login.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  
  { path: "admin", component: AdminComponent },
  { path: "film", component: FilmComponent },
  { path: "addfilm", component: AddfilmComponent },
  { path: "coupon", component: CouponComponent },
  { path: "prenotazioni", component: PrenotazioniComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
