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


    this.serviceUtente.isUserLoggedIn.subscribe((value: string) => {
      this.loggatovalie = value;

    });
 
    this.loggatovalie = sessionStorage.getItem("loggato");
   
    console.log(this.loggatovalie);
  }

  ngOnInit(): void {
  }

}
