import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stpes-to-join',
  imports: [NgFor],
  templateUrl: './stpes-to-join.component.html',
  styleUrl: './stpes-to-join.component.css'
})
export class StpesToJoinComponent {
  steps = [
    {
      sequence:'01',
      title: 'Sign Up & Verify',
      description: 'Complete a quick, one-time KYC,and enjoy instant, unlimited access.',
      image: 'assets/images/home/step1.png',
      name: 'step1'
    },
    {
      sequence:'02',
      title: 'Explore & Select',
      description: 'Browse gemstones by size, type, origin, or certificate like GLA, IGI, HRD.',
      image: 'assets/images/home/step2.png',
      name: 'step2'
    },
    {
      sequence:'03',
      title: 'Order & Receive',
      description: 'Order in a click—we handle inspection, shipping, and insurance.',
      image: 'assets/images/home/step3.png',
      name: 'step3'
    },
  ];

}
