import { Component } from '@angular/core';
import { WhatWeDoComponent } from "../what-we-do/what-we-do.component";
import { WhyChooseUsComponent } from "../why-choose-us/why-choose-us.component";
import { StpesToJoinComponent } from "../stpes-to-join/stpes-to-join.component";
import { RequestDemoComponent } from "../../Home/request-demo/request-demo.component";

@Component({
  selector: 'app-about-us',
  imports: [WhatWeDoComponent, WhyChooseUsComponent, StpesToJoinComponent, RequestDemoComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
