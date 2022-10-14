import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmserviceService {

  private filmUrlNowPlaying: string;
  private filmUrlUpComing : string;
  private filmUrlId:string;

  constructor(private http: HttpClient) {
    this.filmUrlNowPlaying = 'http://localhost:8080/moviesTypes/now_playing';
    this.filmUrlUpComing= 'http://localhost:8080/moviesTypes/upcoming';
    this.filmUrlId='http://localhost:8080/movieDetails/'
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

}
