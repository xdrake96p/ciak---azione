import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilmserviceService } from '../filmservice.service';
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
  constructor(private filmService: FilmserviceService, private salaService: SalaserviceService) {
    this.mioform = new FormGroup({
      film: new FormControl(),
      sala: new FormControl(),
      prezzo: new FormControl(),
      dataFilm: new FormControl(),
      OraProiezione: new FormControl()
    }
    );
    this.SaleDisponibili = [];
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
    alert("film selezioneato " + this.mioform.value.film + " sala " + this.mioform.value.sala + " prezzo " + this.mioform.value.prezzo + " data " + this.mioform.value.dataFilm+" orario spettacolo "+ this.mioform.value.OraProiezione);
    console.log(this.mioform);

  }


}
