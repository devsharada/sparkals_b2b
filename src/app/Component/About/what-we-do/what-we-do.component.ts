import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  imports: [NgFor],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css'
})
export class WhatWeDoComponent {

  wedos = [
    {
      title: 'Real-time Live Inventory',
      description: 'View and purchase inventory instantly from leading suppliers and manufacturers.',
    },
    {
      title: 'Absolute Transparency',
      description: 'Our pricing is clear—no upfront fees, no hidden charges.',
    },
    {
      title: 'Quality Assurance',
      description: 'Every gemstone undergoes independent inspection to ensure it is eye-clean and free of impurities.',
    },
    {
      title: 'Easy Logistics & Invoicing',
      description: 'Consolidated shipments, unified invoices, and door-to-door insured delivery save you time and overhead.',
    }

  ];

}
