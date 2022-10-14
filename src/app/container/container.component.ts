import { Component, OnInit } from '@angular/core';
import { Movietype } from '../movietype';
import { FilmserviceService } from '../filmservice.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  movieNowPlaying: Movietype | undefined;
  movieUpComing: Movietype | undefined;
  constructor(private filmService: FilmserviceService) { }

  ngOnInit(): void {
    this.filmService.filmNowPlaying().subscribe((dato: any) => {
      console.log(dato.movieType);
      this.movieNowPlaying = new Movietype(dato.movieType);
      console.log(this.movieNowPlaying.getRisultato());
    });
    this.filmService.filmUpcoming().subscribe((dato: any) => {
      console.log(dato.movieType);
      this.movieUpComing = new Movietype(dato.movieType);
      console.log(this.movieUpComing.getRisultato());
    });

  }

}
