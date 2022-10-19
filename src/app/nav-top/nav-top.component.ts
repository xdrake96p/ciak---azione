import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtenteserviceService } from '../utenteservice.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  loggatovalie: any;
  
  constructor(public serviceUtente: UtenteserviceService,private router: Router) { }

  ngOnInit(): void {
    this.serviceUtente.isUserLoggedIn.subscribe((value: any) => {
      this.loggatovalie = value;

    });
    this.loggatovalie = sessionStorage.getItem("loggato");
  }
  logout():void{
    sessionStorage.removeItem("loggato");
  this.serviceUtente.isUserLoggedIn.next("0");
    sessionStorage.removeItem("idutente");
    this.router.navigate(['login']);
    
  }
}
