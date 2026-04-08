import { NgFor, NgIf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit, } from '@angular/core';
import { ReviewPopupComponent } from '../review-popup/review-popup.component';

interface Review {
  name: string;
  rating: number;
  review: string;
  user: string;
  date: string;
  images: string[];
}

@Component({
  selector: 'app-product-review',
  imports: [NgFor, NgIf, ReviewPopupComponent],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ProductReviewComponent implements AfterViewInit {
openReviewModal() {
throw new Error('Method not implemented.');
}
  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;
  private initialized = false;

  reviews = [
    {
      name: 'Priya Thakur',
      rating: 5,
      review:
        'Excellent quality ruby, perfect calibration and brilliant cut. The luster was exactly as promised. Very suitable for fine jewelry manufacturing.”',
      user: 'Buyer',
      date: '25 Aug 2025',
      images: [
        'assets/images/product/ruby.png',
        'assets/images/home/review-pic.png',
        'assets/images/home/ruby.png',
        'assets/images/home/ruby.png',
        'assets/images/home/review-pic.png',
      ],
    },
    {
      name: 'Priya Thakur',
      rating: 5,
      review:
        'Excellent quality ruby, perfect calibration and brilliant cut. The luster was exactly as promised. Very suitable for fine jewelry manufacturing.”',
      user: 'Buyer',
      date: '25 Aug 2025',
      images: [
        'assets/images/home/review-pic.png',
        'assets/images/home/review-pic.png',
      ],
    },
    {
      name: 'Priya Thakur',
      rating: 5,
      review:
        'Excellent quality ruby, perfect calibration and brilliant cut. The luster was exactly as promised. Very suitable for fine jewelry manufacturing.”',
      user: 'Buyer',
      date: '25 Aug 2025',
      images: [
        'assets/images/home/review-pic.png',
        'assets/images/home/review-pic.png',
        'assets/images/home/review-pic.png',
        'assets/images/home/review-pic.png',
      ],
    },
    {
      name: 'Priya Thakur',
      rating: 5,
      review:
        'Excellent quality ruby, perfect calibration and brilliant cut. The luster was exactly as promised. Very suitable for fine jewelry manufacturing.”',
      user: 'Buyer',
      date: '25 Aug 2025',
      images: [
        'assets/images/product/ruby.png',
        'assets/images/home/review-pic.png',
        'assets/images/home/review-pic.png',
        'assets/images/home/review-pic.png',
      ],
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
        nextEl: '.swiper-button-review-next',
        prevEl: '.swiper-button-review-prev',
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        992: { slidesPerView: 2, spaceBetween: 15 },
        1200: { slidesPerView: 3, spaceBetween: 20 },
      },
    });

    setTimeout(() => {
      swiperEl.initialize?.();
      this.initialized = true;

      // Pause autoplay on hover
      swiperEl.addEventListener('mouseenter', () =>
        swiperEl.swiper.autoplay?.stop()
      );
      swiperEl.addEventListener('mouseleave', () =>
        swiperEl.swiper.autoplay?.start()
      );
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initSwiper();
    }, 0);
  }

  // zoom view for review images
   isImageModalOpen = false;
  modalImages: string[] = [];
  activeImageIndex = 0;

  openImageModal(images: string[], index: number) {
    this.modalImages = images;
    this.activeImageIndex = index;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
  }

  addReview(review: any) {
  this.reviews.unshift(review);
}
}
