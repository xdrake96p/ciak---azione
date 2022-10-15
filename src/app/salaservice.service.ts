import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaserviceService {
  private salaUrl:string;

  constructor(private http: HttpClient) {
    this.salaUrl='http://localhost:8080/sala';
   }


  public getSale(): Observable<any> {
    return this.http.get<any>(this.salaUrl);
  }
}
