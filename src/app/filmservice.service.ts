import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmserviceService {

  private filmUrlNowPlaying: string;
  private filmUrlUpComing : string;
  private filmUrlId:string;
  private AddFilmRepository:string;
  private AddCouponAFilm:string;
  private UrlSpettacoliDisponinibili:string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
    } ), 
  };


  constructor(private http: HttpClient) {
    this.filmUrlNowPlaying = 'http://localhost:8080/moviesTypes/now_playing';
    this.filmUrlUpComing= 'http://localhost:8080/moviesTypes/upcoming';
    this.filmUrlId='http://localhost:8080/movieDetails/';
    this.AddFilmRepository='http://localhost:8080/addFilmRepository';
    this.AddCouponAFilm='http://localhost:8080/addCoupon';
    this.UrlSpettacoliDisponinibili='http://localhost:8080/ritornaSpettacolo';
  }


  public filmNowPlaying(): Observable<any> {
    return this.http.get<any>(this.filmUrlNowPlaying);
  }
  public filmUpcoming(): Observable<any> {
    return this.http.get<any>(this.filmUrlUpComing);
  }

  public filmId(numer:any): Observable<any>{
    return this.http.get<any>(this.filmUrlId+numer);
  }

  public addFilm(film:any): Observable<any>{
    return this.http.post<any>(this.AddFilmRepository,film ,this.httpOptions);
  }


  public addCoupon(coupon:any): Observable<any>{
    return this.http.post<any>(this.AddCouponAFilm,coupon,this.httpOptions);
  }


public ritornaSpettacolo(): Observable<any> {
  return this.http.get<any>(this.UrlSpettacoliDisponinibili);
}


}



