import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CouponDaMandareAlServer } from '../coupon-da-mandare-al-server';
import { FilmserviceService } from '../filmservice.service';
import { Movietype } from '../movietype';
import { Spettacolo } from '../spettacolo';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  mioform: FormGroup;
  movieNowPlaying: Movietype | undefined;
  coupon: any;
  spettacolo:Spettacolo[];
  constructor(private filmService: FilmserviceService) {
    this.mioform = new FormGroup({
      codiceCoupon: new FormControl(),
      valoreCoupon: new FormControl(),
      film: new FormControl()
    }
    );
    this.spettacolo=[];
   
  }

  ngOnInit(): void { 
     this.filmService.ritornaSpettacolo().subscribe((dato: any) => {
      for(let i in dato)
        this.spettacolo.push(new Spettacolo(dato[i]));
      
     // console.log(dato.movieType);
     // this.movieNowPlaying = new Movietype(dato.movieType);
     // console.log(this.movieNowPlaying.getRisultato());
      console.log(this.spettacolo[1].getFilm());
    }); }

  invio() {
    this.coupon = new CouponDaMandareAlServer(this.mioform.value.codiceCoupon, this.mioform.value.valoreCoupon, this.mioform.value.film);
    console.log(this.coupon);
    this.filmService.addCoupon(this.coupon).subscribe(
      (response: any) => {
        console.log(response)
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

}
