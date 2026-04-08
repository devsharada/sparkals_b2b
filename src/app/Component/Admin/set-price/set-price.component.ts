import { Component } from '@angular/core';
import { DetailsComponent } from "../details/details.component";
import { FormsModule } from "@angular/forms";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-set-price',
  imports: [DetailsComponent, FormsModule, NgFor],
  templateUrl: './set-price.component.html',
  styleUrl: './set-price.component.css'
})
export class SetPriceComponent {
  products = [
  { id: 'DMD001', category: 'Diamond', color: 'D', clarity: 'VVS1', carat: '1/4', increaseprice: '8,500', lastprice: '9,500' },
  { id: 'DMD001', category: 'Diamond', color: 'D', clarity: 'VVS1', carat: '1/4', increaseprice: '8,500', lastprice: '9,500' },
  { id: 'DMD001', category: 'Diamond', color: 'D', clarity: 'VVS1', carat: '1/4', increaseprice: '8,500', lastprice: '9,500' },
  { id: 'DMD001', category: 'Diamond', color: 'D', clarity: 'VVS1', carat: '1/4', increaseprice: '8,500', lastprice: '9,500' },
  { id: 'DMD001', category: 'Diamond', color: 'D', clarity: 'VVS1', carat: '1/4', increaseprice: '8,500', lastprice: '9,500' },
  ]

}
