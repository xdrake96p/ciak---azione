import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmserviceService {

  private filmUrlNowPlaying: string;
  private filmUrlUpComing : string;

  constructor(private http: HttpClient) {
    this.filmUrlNowPlaying = 'http://localhost:8080/moviesTypes/now_playing';
    this.filmUrlUpComing= 'http://localhost:8080/moviesTypes/upcoming';
  }

  public filmNowPlaying(): Observable<any> {
    return this.http.get<any>(this.filmUrlNowPlaying);
  }
  public filmUpcoming(): Observable<any> {
    return this.http.get<any>(this.filmUrlUpComing);
  }


}
