import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  [x: string]: any;
  constructor() { }

  ngOnInit(): void {
  }
  invio(form:NgForm ) {alert("Tutto il form: " + JSON.stringify(form.value) );}
}
