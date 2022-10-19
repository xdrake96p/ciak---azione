import { Component, OnInit } from '@angular/core';
import { Utente } from '../utente';
import { UtenteserviceService } from '../utenteservice.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {
  utente: any ;
  id:any;
  constructor( private utenteService: UtenteserviceService) { }


  ngOnInit(): void {
    this.id=sessionStorage.getItem("idutente");
    this.utenteService.getProfiloInformazioniById(this.id).subscribe((dato: any) => {//si deve fare dinamico per ora torna solo 1 utente con id=1
      console.log(dato);
       this.utente= new Utente(dato);
       console.log(this.utente);
     
    });

  }

}
