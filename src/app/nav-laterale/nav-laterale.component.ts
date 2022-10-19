import { Component, OnInit } from '@angular/core';
import { UtenteserviceService } from '../utenteservice.service';

@Component({
  selector: 'app-nav-laterale',
  templateUrl: './nav-laterale.component.html',
  styleUrls: ['./nav-laterale.component.css']
})
export class NavLateraleComponent implements OnInit {

  loggatovalie: any;
  tipoutente: any;
  constructor(public serviceUtente: UtenteserviceService) {


    this.serviceUtente.isUserLoggedIn.subscribe((value: any) => {
      this.loggatovalie = value;

    });
    this.serviceUtente.TipoUtenteA.subscribe((a: any) => {
      this.tipoutente = a;
    });
    this.loggatovalie = sessionStorage.getItem("loggato");
    this.tipoutente = sessionStorage.getItem("tipoutente")
    console.log(this.loggatovalie);
  }

  ngOnInit(): void {
  }

}
