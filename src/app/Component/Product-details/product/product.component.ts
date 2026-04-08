import { Component } from '@angular/core';
import { ProductSlider4Component } from "../product-slider4/product-slider4.component";
import { ProductSlider5Component } from "../product-slider5/product-slider5.component";
import { ProductReviewComponent } from "../../Review/product-review/product-review.component";
import { ProductInfoComponent } from "../product-info/product-info.component";
import { ProductSpecificationsComponent } from "../product-specifications/product-specifications.component";

@Component({
  selector: 'app-product',
  imports: [ProductSlider4Component, ProductSlider5Component, ProductReviewComponent, ProductInfoComponent, ProductSpecificationsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
