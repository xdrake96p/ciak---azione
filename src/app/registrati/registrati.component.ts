import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Utente } from '../utente';
import { UtenteserviceService } from '../utenteservice.service';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent implements OnInit {
  [x: string]: any;
  mioform: FormGroup;
  utentec: any;
  date: any;
  constructor(private utenteservizio: UtenteserviceService) {
    this.mioform = new FormGroup({
      nome: new FormControl(null,Validators.required),
      cognome: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.email),
      dataDiNascita: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      tipoUtente: new FormControl()
    });
    this.date=new Date().toISOString().slice(0,10);
  }

  ngOnInit(): void {

  }
  invio() {

    this.utentec = new Utente(this.mioform.value);
    console.log(this.utentec);
    this.utenteservizio.setRegistrazione(this.utentec).subscribe(
      (response: any) => {
        console.log(response)
      },
      (error: any) => {
        alert("Errore, dati già esistente")
        console.log(error)
      }
    )


  }
}
