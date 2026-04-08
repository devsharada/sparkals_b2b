import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-features',
  imports: [NgFor],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  features = [
    {
      icon: 'assets/images/home/feature1.png',
      title: 'Complimentary design',
      description: 'Take advantage of our free custom design service with all loose gemstones sold.',
    },
    {
      icon: 'assets/images/home/feature2.png',
      title: 'Expert Guidance',
      description: 'Feel free to chat to us regarding anything from gemstone properties to having it set into an inspired jewellery piece.',
    },
    {
      icon: 'assets/images/home/feature3.png',
      title: '7 Day Returns',
      description: 'Have peace of mind that provided there is no damage we offer a no questions asked 14 day full refund on loose colored gemstone.',
    },
  ]

}
