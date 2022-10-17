import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Utente } from '../utente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  mioform: FormGroup;
  utenteI:any;
  constructor() {
    this.mioform = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
  }
  invio() { 
    this.utenteI= new Utente(this.mioform);
    console.log(this.utenteI);

   }
}


