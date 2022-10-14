import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteserviceService {
  private  UtenteUrlProfiloDettagli : string;

  constructor(private http: HttpClient) {
    this.UtenteUrlProfiloDettagli="http://localhost:8080/user/1";//devi togliere 1 altrimenti ti trova solo il primo id del profilo per ora è temporaneo
   }

   public getProfiloInformazioniById(id:any): Observable<any> {
    return this.http.get<any>(this.UtenteUrlProfiloDettagli);
  }
}
