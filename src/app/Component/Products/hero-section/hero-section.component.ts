import { Component } from '@angular/core';
import { AllProductsComponent } from '../all-products/all-products.component';
import { FeaturesComponent } from '../features/features.component';
import { RequestDemoComponent } from "../../Home/request-demo/request-demo.component";
import { FilterComponent } from "../filter/filter.component";
import { BreadcrumbComponent } from "../../Core/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-hero-section',
  imports: [AllProductsComponent, FeaturesComponent, RequestDemoComponent, AllProductsComponent, FilterComponent, BreadcrumbComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
