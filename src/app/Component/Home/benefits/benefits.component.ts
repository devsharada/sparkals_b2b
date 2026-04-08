import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  imports: [NgFor],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {

  benefits = [
    {
      image: '/assets/images/home/no-hidden-cost.png',
      title: 'No hidden cost'
    },
    {
      image: '/assets/images/home/higher-profitability.png',
      title: 'Higher Profitability'
    },
    {
      image: '/assets/images/home/brand-recognition.png',
      title: 'Brand Recognition'
    },
    {
      image: '/assets/images/home/no-risk.png',
      title: 'No Risk of Failure'
    }
  ];

}
