import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  mioform: FormGroup;
  constructor() { this.mioform = new FormGroup({
    codiceCoupon: new FormControl(),
    valoreCoupon: new FormControl()
  }
  );}

  ngOnInit(): void {
  }
  invio(){
    alert("Coupon Inserito " + this.mioform.value.codiceCoupon + " valore " + this.mioform.value.valoreCoupon );
    console.log(this.mioform);

  }

}
