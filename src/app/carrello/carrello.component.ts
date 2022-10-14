import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  [x: string]: any;
  constructor() { }

  ngOnInit(): void {
  }
  invio(form:NgForm ) {alert("Tutto il form: " + JSON.stringify(form.value) );}
  
}
