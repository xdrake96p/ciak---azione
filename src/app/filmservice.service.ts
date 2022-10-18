import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    this.filmUrlNowPlaying = environment.baseUrl + 'moviesTypes/now_playing';
    this.filmUrlUpComing= environment.baseUrl + 'moviesTypes/upcoming';
    this.filmUrlId=environment.baseUrl + 'movieDetails/';
    this.AddFilmRepository=environment.baseUrl + 'addFilmRepository';
    this.AddCouponAFilm=environment.baseUrl + 'addCoupon';
    this.UrlSpettacoliDisponinibili=environment.baseUrl + 'ritornaSpettacolo';
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



