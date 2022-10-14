import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmserviceService } from '../filmservice.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  id:any;
  constructor(private route: ActivatedRoute,private filmService: FilmserviceService) { 
   
  }

  ngOnInit(): void {
   this.id=this.route.snapshot.paramMap.get('id');
   this.filmService.filmId(this.id).subscribe((dato: any) => { //funziona la recupera delle info ma si deve implementare il model
    console.log(dato);
    
  });

  }

}
