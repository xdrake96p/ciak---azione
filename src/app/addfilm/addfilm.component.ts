import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilmserviceService } from '../filmservice.service';
import { Movietype } from '../movietype';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css']
})
export class AddfilmComponent implements OnInit {
  mioform: FormGroup;
  movieNowPlaying: Movietype | undefined;
  constructor(private filmService: FilmserviceService, private activatedRoute: ActivatedRoute) {
    this.mioform = new FormGroup({
      film: new FormControl(),
      sala: new FormControl(),
      prezzo: new FormControl(),
      dataFilm: new FormControl()
    }
    );

  }
/* SelezionaFilm: any;
  SelezionaSala: any;
  Prezzo: any;
  DataFilm: any;*/
  ngOnInit(): void {
    this.filmService.filmNowPlaying().subscribe((dato: any) => {
      console.log(dato.movieType);
      this.movieNowPlaying = new Movietype(dato.movieType);
      console.log(this.movieNowPlaying.getRisultato());
    });
  }
  invio() {
    // alert("Tutto il form: " + JSON.stringify(form.value));
    /* console.log("Nome inserito è " + form.controls['nome'].value);
     console.log("Email inserita è " + form.controls['email'].value);*/
    alert("film selezioneato " + this.mioform.value.film + " sala " + this.mioform.value.sala + " prezzo " + this.mioform.value.prezzo + " data " + this.mioform.value.dataFilm);
    console.log(this.mioform);

  }


}
