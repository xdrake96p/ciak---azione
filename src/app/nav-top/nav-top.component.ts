import { Component, OnInit } from '@angular/core';
import { UtenteserviceService } from '../utenteservice.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  loggatovalie: any;
  
  constructor(public serviceUtente: UtenteserviceService) { }

  ngOnInit(): void {
    this.serviceUtente.isUserLoggedIn.subscribe((value: any) => {
      this.loggatovalie = value;

    });
    this.loggatovalie = sessionStorage.getItem("loggato");
  }

}
