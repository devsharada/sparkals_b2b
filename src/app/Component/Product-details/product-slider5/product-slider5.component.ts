import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-slider5',
  imports: [NgFor, RouterLink],
  templateUrl: './product-slider5.component.html',
  styleUrl: './product-slider5.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductSlider5Component implements AfterViewInit {

    @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;
    private initialized = false;

  products1 = [
      {
        name: 'Brilliant Round White Diamond',
        image1: 'assets/images/product/ruby.png',
        image2: 'assets/images/product/yellow-sapphire.png',
        weight: '2.50 ct',
        clarity: 'VVS1 (Round)',
        link: '/product-details',
      },
      {
        name: 'Brilliant Round White Diamond',
        image1: 'assets/images/product/yellow-sapphire.png',
        image2: 'assets/images/product/blue-sapphire.png',
        weight: '2.50 ct',
        clarity: 'VVS1 (Round)',
        link: '/product-details',
      },
      {
        name: 'Brilliant Round White Diamond',
        image1: 'assets/images/product/blue-sapphire.png',
        image2: 'assets/images/product/pink-sapphire.png',
        weight: '2.50 ct',
        clarity: 'VVS1 (Round)',
        link: '/product-details',
      },
      {
        name: 'Brilliant Round White Diamond',
        image1: 'assets/images/product/emerald.png',
        image2: 'assets/images/product/ruby.png',
        weight: '2.50 ct',
        clarity: 'VVS1 (Round)',
        link: '/product-details',
      },
      {
        name: 'Brilliant Round White Diamond',
        image1: 'assets/images/product/pink-sapphire.png',
        image2: 'assets/images/product/yellow-sapphire.png',
        weight: '2.50 ct',
        clarity: 'VVS1 (Round)',
        link: '/product-details',
      },
      {
        name: 'Brilliant Round White Diamond',
        image1: 'assets/images/product/blue-sapphire.png',
        image2: 'assets/images/product/pink-sapphire.png',
        weight: '2.50 ct',
        clarity: 'VVS1 (Round)',
        link: '/product-details',
      },

    ];


  private initSwiper() {
    if (this.initialized) return;
    const swiperEl = this.swiperRef?.nativeElement as any;
    if (!swiperEl) return;

    Object.assign(swiperEl, {
      slidesPerView: 6,
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
        nextEl: '.swiper-button-next5',
        prevEl: '.swiper-button-prev5',
      },
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 15 },
        992: { slidesPerView: 4, spaceBetween: 15 },
        1200: { slidesPerView: 5, spaceBetween: 20 },
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


}

