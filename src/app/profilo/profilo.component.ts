import { Component, OnInit } from '@angular/core';
import { Utente } from '../utente';
import { UtenteserviceService } from '../utenteservice.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {
  utente: Utente | undefined;
  id:number | undefined;
  constructor( private utenteService: UtenteserviceService) { }


  ngOnInit(): void {
    this.id=1;
    this.utenteService.getProfiloInformazioniById(this.id).subscribe((dato: any) => {
      console.log(JSON.stringify(dato));
      this.utente= new Utente(dato);
    });

  }

}
