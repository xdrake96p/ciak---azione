import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private utenteservice: UtenteserviceService,private router: Router) {
    this.mioform = new FormGroup({
      email: new FormControl(null,Validators.email),
      password: new FormControl(null, Validators.required),
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
        this.utenteservice.isUserLoggedIn.next("2");
        }else{
        sessionStorage.setItem("loggato","1");
        this.utenteservice.isUserLoggedIn.next("1");
        }
       
        console.log(response)
        
        this.router.navigate(['home']);
      },
      (error: any) => {
        alert("email / password sbagliayo");
        console.log(error)
      }
    )
    console.log(this.mioform.value);

  }
}


