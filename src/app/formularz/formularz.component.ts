import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CsvService } from 'src/app/services/csv.service';
import { Zone } from '../models/zone';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.css']
})
export class FormularzComponent implements OnInit {

   zonesFromPostcode: string;
   totalOrderAmaunt: number;
   longProduct: boolean;
   finalOrderAmaunt: number;

  formOrder = new FormGroup({
    inputPostcode: new FormControl('', [Validators.required, Validators.max(99999) , Validators.min(10000)]),
    inputAmount: new FormControl('', Validators.required),
    checkLongProduct: new FormControl(''),
  });

   x: Zone[];
  constructor(public servicecsv: CsvService) { }

  ngOnInit(): void {
    this.x = this.servicecsv.getZone();
  }

  onSubmit(): void
  {
    this.finalOrderAmaunt = 0;
    this.finalCost();
  }

  finalCost(): void
  {
    let amount = this.addDiscount();
    this.longProduct = this.formOrder.get('checkLongProduct').value;

    if (this.longProduct)
    {
      amount += 1995;
    }
    this.finalOrderAmaunt = amount;
    console.log(this.finalOrderAmaunt);
  }

  addDiscount(): number
  {
    this.totalOrderAmaunt = this.formOrder.get('inputAmount').value;
    const x = this.priceZone(this.zonesFromPostcode = this.formOrder.get('inputPostcode').value.toString().substring(0, 2));
    this.totalOrderAmaunt += x;
    if ( this.totalOrderAmaunt > 12500)
    {
      let discount: number;
      discount =  (this.totalOrderAmaunt * 5) / 100;
      return this.totalOrderAmaunt - discount;
    }
    else
    {
      return this.totalOrderAmaunt;
    }
  }

  priceZone(nrZone: string): number
  {
    const c: Zone[] = this.x.filter(val => val.id === nrZone);
    const price = c[0].price;
    return parseFloat(price);
  }
}
