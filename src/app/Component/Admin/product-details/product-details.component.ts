import { Component } from '@angular/core';
import { DetailsComponent } from "../details/details.component";
import { ProductComponent } from "../../Product-details/product/product.component";

@Component({
  selector: 'app-product-details',
  imports: [ DetailsComponent, ProductComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

}
