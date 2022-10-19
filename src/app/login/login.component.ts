import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Utente } from '../utente';
import { UtenteLoggato } from '../utente-loggato';
import { UtenteserviceService } from '../utenteservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  mioform: FormGroup;

  utente: any;
  utentelog:any;
  constructor(private utenteservice: UtenteserviceService) {
    this.mioform = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
  }
  invio() {
    this.utente = new UtenteLoggato(this.mioform.value.email, this.mioform.value.password);
    this.utenteservice.setInvioLogin(this.utente).subscribe(
      (response: any) => {
        
        sessionStorage.setItem("idutente",response.id_utente);
        if(response.tipoUtente==='Admin'){
        sessionStorage.setItem("loggato","2");
        }else{
        sessionStorage.setItem("loggato","1");
        }
        //sessionStorage.setItem("tipoutente",response.tipoUtente);
        console.log(response)
      },
      (error: any) => {
        console.log(error)
      }
    )
    console.log(this.mioform.value);

  }
}


