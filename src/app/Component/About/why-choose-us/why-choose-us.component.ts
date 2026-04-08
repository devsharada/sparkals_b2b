import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  imports: [NgFor],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WhyChooseUsComponent implements AfterViewInit {

    @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;
    private initialized = false;

  products1 = [
      { image: 'assets/images/home/about-us.png', name: 'about-us' },
      { image: 'assets/images/home/about-us2.jpg', name: 'about-us' },
      { image: 'assets/images/home/about-us1.jpg', name: 'about-us' },
      { image: 'assets/images/home/about-us3.jpg', name: 'about-us' },
    ];


  private initSwiper() {
    if (this.initialized) return;
    const swiperEl = this.swiperRef?.nativeElement as any;
    if (!swiperEl) return;

    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 500,
      grabCursor: true,
      freeMode: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
      },
    });

    setTimeout(() => {
      swiperEl.initialize?.();
      this.initialized = true;

      // Pause autoplay on hover
      swiperEl.addEventListener('mouseenter', () => swiperEl.swiper.autoplay?.stop());
      swiperEl.addEventListener('mouseleave', () => swiperEl.swiper.autoplay?.start());
    });
  }

 ngAfterViewInit() {
  setTimeout(() => {
    this.initSwiper();
  }, 0);
}

 whychooses = [
    {
      title: 'One-Time KYC, Infinite Access',
    },
    {
      title: 'Always-On Assistance',
    },
    {
      title: 'Plug‑and‑Play Integration',
    },
    {
      title: 'Award-winning Solutions',
    }
  ];
}
