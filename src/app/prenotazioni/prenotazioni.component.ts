import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.component.html',
  styleUrls: ['./prenotazioni.component.css']
})
export class PrenotazioniComponent implements OnInit {
  mioform: FormGroup;
  constructor() {  
     this.mioform = new FormGroup({
    nome: new FormControl(null,Validators.required),
    numerSala: new FormControl(null, Validators.required),
  });}

  ngOnInit(): void {
  }
  invio(){

  }
}
