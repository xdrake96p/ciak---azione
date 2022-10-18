import { Component, OnInit } from '@angular/core';
import { Movietype } from '../movietype';
import { FilmserviceService } from '../filmservice.service';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../film';
import { FilminSala } from '../filmin-sala';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  movieNowPlaying: Movietype | undefined;
  id!: number;
  movieUpComing: Movietype | undefined;
  homefilm: FilminSala []; 
  constructor(private filmService: FilmserviceService,private activatedRoute: ActivatedRoute) { 
    this.homefilm=[];
  }

  ngOnInit(): void {
    //this.filmService.filmNowPlaying().subscribe((dato: any) => {
      //console.log(dato.movieType);

     // this.movieNowPlaying = new Movietype(dato.movieType);
     // console.log(this.movieNowPlaying.getRisultato());
   // });
   this.filmService.ritornaFilmHome().subscribe((dato:any) =>{
     // console.log(dato);
     for(let i in dato){
      this.homefilm.push(new FilminSala(dato[i]));
     }
    //  this.homefilm=dato;
      console.log( this.homefilm);
   })
    this.filmService.filmUpcoming().subscribe((dato: any) => {
      console.log(dato.movieType);
      this.movieUpComing = new Movietype(dato.movieType);
      console.log(this.movieUpComing.getRisultato());
    });
  
    

  }

}
