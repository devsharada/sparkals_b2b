import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from "../details/details.component";
import { FilterComponent } from '../../Products/filter/filter.component';
import { AllProductsComponent } from "../../Products/all-products/all-products.component";
import { NgIf } from '@angular/common';
import { AllProductListComponent } from "../all-product-list/all-product-list.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [DetailsComponent, FilterComponent, AllProductsComponent, NgIf, AllProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
viewMode: 'grid' | 'list' = 'grid';

isSortOpen = false;
applySort(option: string) {
  console.log("Sorting by:", option);
  this.isSortOpen = false;
  //  here you can call your product API / service with sort params
}

// sort bar will show/hide according admin approval
showSortBar = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.showSortBar = params['approved'] === 'false';
    });
  }
}
