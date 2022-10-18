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
  constructor(private route: ActivatedRoute, private filmService: FilmserviceService) {
   
  }

  ngOnInit(): void {
    // this.dettagliSpettacolo = [];
    this.id = this.route.snapshot.paramMap.get('id');
    this.filmService.ritornaDettagliSpettacolo(this.id).subscribe((dato: any) => {
      for (let i in dato) {
        this.dettagliSpettacolo.push(new SpettacoloInfo(dato[i]))
      }
      // this.dettagliSpettacolo=dato;
      console.log(this.dettagliSpettacolo);
      //  this.moviedetail = new Moviedetail(dato);
    });
    this.filmService.filmId(this.id).subscribe((dato: any) => { //probabilmente cambierà con una funzione che mi ritorna solo quello che sta nel mio db
      // console.log(dato);
      this.moviedetail = new Moviedetail(dato);
    });

  }

}
