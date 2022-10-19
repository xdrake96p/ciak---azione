import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmserviceService } from '../filmservice.service';
import { Sala } from '../sala';
import { SalaCreazione } from '../sala-creazione';

@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.component.html',
  styleUrls: ['./prenotazioni.component.css']
})
export class PrenotazioniComponent implements OnInit {
  sala:any;
  mioform: FormGroup;
  constructor(private filmservice: FilmserviceService) {  
     this.mioform = new FormGroup({
    nome: new FormControl(null,Validators.required),
    numerSala: new FormControl(null, Validators.required),
  });}

  ngOnInit(): void {
  }
  invio(){
    this.sala = new  SalaCreazione(this.mioform.value);
    console.log(this.sala);
    this.filmservice.inserisciSala(this.sala).subscribe(
      (response:any) => {
        console.log(response)
      },
      (error:any) => {
        console.log(error)
      }
    )


  }
}
