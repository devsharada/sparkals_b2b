import { Component } from '@angular/core';
import { RequestDemoComponent } from '../../Home/request-demo/request-demo.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [RequestDemoComponent, NgFor, NgIf],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqs = [
    {
      q: 'Are your diamonds natural or lab-grown?',
      a: 'We offer both natural and lab-grown diamonds. Each product description specifies the type of diamond.',
    },
    {
      q: 'Do your diamonds come with a certificate?',
      a: 'Yes, all our diamonds come with an authenticity and quality certificate.',
    },
    {
      q: 'Can I customize a piece of jewelry?',
      a: 'Absolutely! We offer customization options for design, metal, and gemstones.',
    },
    {
      q: 'How do I find my ring size?',
      a: 'You can use our online ring size guide or visit a jeweler to get your exact size.',
    },
    {
      q: 'Do you offer resizing services?',
      a: 'Yes, we provide resizing services for most rings. Contact our support for details.',
    },
    {
      q: 'What is your return and exchange policy?',
      a: 'We offer hassle-free returns and exchanges within 15 days of purchase.',
    },
    {
      q: 'Is your jewelry ethically sourced?',
      a: 'Yes, we ensure all our materials are ethically sourced and conflict-free.',
    },
    {
      q: 'Do you provide international shipping?',
      a: 'Yes, we ship internationally with reliable courier partners.',
    },
    {
      q: 'How should I care for my jewelry?',
      a: 'Clean your jewelry regularly with a soft cloth and store it in a dry, safe place.',
    },
    {
      q: 'Do you offer financing or installment plans?',
      a: 'Yes, we provide easy EMI and installment plans. Check during checkout for available options.',
    },
  ];

  activeIndex: number | null = null;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
