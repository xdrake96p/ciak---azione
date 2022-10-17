import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { timestamp } from 'rxjs';
import { FilmDaMandareAlServer } from '../film-da-mandare-al-server';
import { FilmserviceService } from '../filmservice.service';
import { Moviedetail } from '../moviedetail';
import { Movietype } from '../movietype';
import { Sala } from '../sala';
import { SalaserviceService } from '../salaservice.service';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css']
})
export class AddfilmComponent implements OnInit {
  mioform: FormGroup;
  movieNowPlaying: Movietype | undefined;
  SaleDisponibili: Sala[];
  date: any;
  salaSelezionata:any;
  prezzoSelezionato:any;
  DataProiezioneSelezionata:any;
  OrarioProiezione:any;

  filmDaMandare:any;
  moviedetail: Moviedetail | undefined;
  
  constructor(private filmService: FilmserviceService, private salaService: SalaserviceService) {
    this.mioform = new FormGroup({
      film: new FormControl(),
      sala: new FormControl(),
      prezzo: new FormControl(),
      dataFilm: new FormControl(),
      OraProiezione: new FormControl()
    });
    this.SaleDisponibili = [];
    this.date=new Date().toISOString().slice(0,10);
  }
  ngOnInit(): void {
    this.filmService.filmNowPlaying().subscribe((dato: any) => {
      console.log(dato.movieType);
      this.movieNowPlaying = new Movietype(dato.movieType);
      console.log(this.movieNowPlaying.getRisultato());
    });
    this.salaService.getSale().subscribe((dato: any) => {
      for (let i in dato) {
        this.SaleDisponibili.push(new Sala(dato[i]));
      } console.log(JSON.stringify(this.SaleDisponibili));
    });
  }
  invio() {
  

    this.filmService.filmId(this.mioform.value.film).subscribe((dato: any) => { //probabilmente cambierà con una funzione che mi ritorna solo quello che sta nel mio db
      //console.log("sono il dato qui "+ dato);
      this.moviedetail = new Moviedetail(dato);
    });
    //console.log(this.mioform.value.OraProiezione );
      this.filmDaMandare=new FilmDaMandareAlServer(this.mioform.value.film,this.mioform.value.dataFilm,this.mioform.value.OraProiezione,this.mioform.value.sala, this.mioform.value.prezzo);
      console.log(JSON.stringify(this.filmDaMandare));
    this.filmService.addFilm(this.filmDaMandare).subscribe(
      (response:any) => {
        console.log(response)
      },
      (error:any) => {
        console.log(error)
      }
    )
  }


}
