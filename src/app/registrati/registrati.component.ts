import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent implements OnInit {
  [x: string]: any;
  constructor() { }

  ngOnInit(): void {
  }
  invio(form:NgForm ) {alert("Tutto il form: " + JSON.stringify(form.value) );}
}
