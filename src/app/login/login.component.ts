import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
[x: string]: any;

  constructor() { }

  ngOnInit(): void {
    }
    invio(form:NgForm ) {alert("Tutto il form: " + JSON.stringify(form.value) );}
}


