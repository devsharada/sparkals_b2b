import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ProductSlider2Component } from "../product-slider2/product-slider2.component";
import { ProductSlider3Component } from "../product-slider3/product-slider3.component";
import { OfferBannerComponent } from "../offer-banner/offer-banner.component";
import { ProductSlider1Component } from '../product-slider1/product-slider1.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { BenefitsComponent } from "../benefits/benefits.component";
import { RequestDemoComponent } from "../request-demo/request-demo.component"
import { HowWorksComponent } from "../how-works/how-works.component";

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, ProductSlider1Component, ProductSlider2Component, ProductSlider3Component, OfferBannerComponent, WhyUsComponent, BenefitsComponent, RequestDemoComponent, HowWorksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
