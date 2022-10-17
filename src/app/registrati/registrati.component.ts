import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
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
      nome: new FormControl(),
      cognome: new FormControl(),
      email: new FormControl(),
      dataDiNascita: new FormControl(),
      password: new FormControl()
    });
    this.date=new Date().toISOString().slice(0,10);
  }

  ngOnInit(): void {

  }
  invio() {

    this.utentec = new Utente(this.mioform);
    console.log(this.utentec);
    this.utenteservizio.setRegistrazione(this.utentec).subscribe(
      (response: any) => {
        console.log(response)
      },
      (error: any) => {
        console.log(error)
      }
    )


  }
}
