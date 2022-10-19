import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmserviceService } from '../filmservice.service';
import { Moviedetail } from '../moviedetail';
import { SpettacoloInfo } from '../spettacolo-info';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  id: any;
  moviedetail: Moviedetail | undefined;
  dettagliSpettacolo: SpettacoloInfo[] = [];
  prezzoScelto: any;
 
  constructor(private route: ActivatedRoute, private filmService: FilmserviceService) {
   
  }
  cambiaPrezzo(event:any) {
  // this.prezzoScelto = this.dettagliSpettacolo.filter(spettacolo =>
   //  spettacolo.dataSpettacolo == event).cambiaPrezzo;
    console.log(event);
   }
  ngOnInit(): void {
    this.dettagliSpettacolo = [];
    this.id = this.route.snapshot.paramMap.get('id');
    this.filmService.ritornaDettagliSpettacolo(this.id).subscribe((dato: any) => {
      for (let i in dato) {
        this.dettagliSpettacolo.push(new SpettacoloInfo(dato[i]))
      }
     
      console.log(this.dettagliSpettacolo);
       this.moviedetail = new Moviedetail(dato);
    });
    console.log(this.dettagliSpettacolo);
    this.filmService.filmId(this.id).subscribe((dato: any) => { //probabilmente cambierà con una funzione che mi ritorna solo quello che sta nel mio db
      console.log(dato);
      this.moviedetail = new Moviedetail(dato);
    });
    
  }

}
function cambiaPrezzo(event: Event | undefined) {
  throw new Error('Function not implemented.');
}

