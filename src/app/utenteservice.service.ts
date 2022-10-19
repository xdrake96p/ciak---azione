import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteserviceService {
  private  UtenteUrlProfiloDettagli : string;
  private  UtenteUrlLoginUtente : string;
  private utenteRegistrazione:string;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public TipoUtenteA: BehaviorSubject<string> = new BehaviorSubject<string>("");
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
    } ), 
  };
  

  constructor(private http: HttpClient) {
   this.UtenteUrlProfiloDettagli="http://localhost:8080/user/";//devi togliere 1 altrimenti ti trova solo il primo id del profilo per ora è temporaneo
    this.utenteRegistrazione="http://localhost:8080/registrazione"
    this.UtenteUrlLoginUtente="http://localhost:8080/login"
   }

   public getProfiloInformazioniById(id:any): Observable<any> {
    return this.http.get<any>(this.UtenteUrlProfiloDettagli+id);
  }

  public setRegistrazione(utente:any): Observable<any>{
    return this.http.post<any>(this.utenteRegistrazione,utente,this.httpOptions);
  }

  public setInvioLogin(utente:any): Observable<any>{
    return this.http.post<any>(this.UtenteUrlLoginUtente,utente,this.httpOptions);
  }
}
