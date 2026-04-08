import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild, ElementRef  } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Product {
  id: string;
  name: string;
  carat: number;
  shape: string;
  color: string;
  colorClass: string;
  clarity: string;
  clarityClass: string;
  cut: string;
  polish: string;
  symm: string;
  imageUrl: string;
  videoUrl: string;
}

@Component({
  selector: 'app-all-product-list',
  imports: [NgFor, NgClass, RouterLink, NgIf],
  templateUrl: './all-product-list.component.html',
  styleUrl: './all-product-list.component.css',
})
export class AllProductListComponent {
@ViewChild('mainVideo') mainVideo!: ElementRef<HTMLVideoElement>;

  products = [
    {
      id: '16041674',
      name: 'Cushion',
      carat: 0.3,
      shape: '/assets/images/filter/cushion.png',
      color: 'Very Light',
      colorClass: 'bg-[#F3E8FF] text-[#7116B2] border-[#E5C0FF]',
      clarity: 'SI2',
      clarityClass: 'bg-[#EDE9FE] text-[#6F4DFF] border-[#DBD3FF]',
      cut: 'VG',
      polish: '-',
      symm: 'VSLT',
      imageUrl: '/assets/images/product/product1.png',
      videoUrl: '/assets/images/video/ruby.mp4',
    },
    {
      id: '16041674',
      name: 'Princess',
      carat: 0.45,
      shape: '/assets/images/filter/asscher.png',
      color: 'Colorless',
      colorClass: 'bg-[#F1F5F9] text-[#1D293D] border-[#E2E8F0]',
      clarity: 'VS1',
      clarityClass: 'bg-[#EDE9FE] text-[#6F4DFF] border-[#DBD3FF]',
      cut: 'EX',
      polish: '-',
      symm: 'VG',
      imageUrl: '/assets/images/product/product1.png',
      videoUrl: '/assets/images/video/blue-sapphire.mp4',
    },
    {
      id: '16041674',
      name: 'Cushion',
      carat: 0.45,
      shape: '/assets/images/filter/pear.png',
      color: 'Faint Yellow',
      colorClass: 'bg-yellow-100 text-yellow-700 border-[#FFDDB0]',
      clarity: 'VS1',
      clarityClass: 'bg-[#EDE9FE] text-[#6F4DFF] border-[#DBD3FF]',
      cut: 'EX',
      polish: '-',
      symm: 'VG',
      imageUrl: '/assets/images/product/product1.png',
      videoUrl: '/assets/images/video/ruby.mp4',
    },
    {
      id: '16041674',
      name: 'Cushion',
      carat: 0.3,
      shape: '/assets/images/filter/cushion.png',
      color: 'Very Light',
      colorClass: 'bg-[#F3E8FF] text-[#7116B2] border-[#E5C0FF]',
      clarity: 'SI2',
      clarityClass: 'bg-[#EDE9FE] text-[#6F4DFF] border-[#DBD3FF]',
      cut: 'VG',
      polish: '-',
      symm: 'VSLT',
      imageUrl: '/assets/images/product/product1.png',
      videoUrl: '/assets/images/video/blue-sapphire.mp4',
    },
    {
      id: '16041674',
      name: 'Princess',
      carat: 0.45,
      shape: '/assets/images/filter/asscher.png',
      color: 'Colorless',
      colorClass: 'bg-[#F1F5F9] text-[#1D293D] border-[#E2E8F0]',
      clarity: 'VS1',
      clarityClass: 'bg-[#EDE9FE] text-[#6F4DFF] border-[#DBD3FF]',
      cut: 'EX',
      polish: '-',
      symm: 'VG',
      imageUrl: '/assets/images/product/product1.png',
      videoUrl: '/assets/images/video/blue-sapphire.mp4',
    },
  ];

  isPopupOpen = false;
  popupType: 'image' | 'video' | null = null;

  selectedImage: string | null = null;
  selectedVideo: string | null = null;

  openImagePopup(imageUrl: string) {
    this.popupType = 'image';
    this.selectedImage = imageUrl;
    this.isPopupOpen = true;
  }

  openVideoPopup(videoUrl: string) {
    this.popupType = 'video';
    this.selectedVideo = videoUrl;
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.selectedImage = null;
    this.selectedVideo = null;
  }

  // Main product images
  mainImage = '/assets/images/product/product1.png';
  thumbnails = [
    '/assets/images/product/product1.png',
    '/assets/images/product/product2.png',
    '/assets/images/product/product3.png',
    '/assets/images/product/product4.png',
    '/assets/images/product/product5.png',
  ];

  // For looping carousel
  visibleCount = 5; // number of thumbnails visible at once
  startIndex = 0;

  get visibleThumbnails() {
    const extended = [...this.thumbnails, ...this.thumbnails]; // double for looping
    return extended.slice(this.startIndex, this.startIndex + this.visibleCount);
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  nextThumb() {
    this.startIndex = (this.startIndex + 1) % this.thumbnails.length;
  }

  prevThumb() {
    this.startIndex =
      (this.startIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
  }

  // for videos
  videoThumbnails = [
    {
      video: '/assets/images/video/blue-sapphire.mp4',
      thumb: '/assets/images/product/product1.png',
    },
    {
      video: '/assets/images/video/ruby.mp4',
      thumb: '/assets/images/product/product2.png',
    },
    {
      video: '/assets/images/video/blue-sapphire.mp4',
      thumb: '/assets/images/product/product3.png',
    },
    {
      video: '/assets/images/video/ruby.mp4',
      thumb: '/assets/images/product/product5.png',
    },
  ];

  selectVideo(thumb: { video: string; thumb: string }) {
    this.selectedVideo = thumb.video;

    // Reload the video
    setTimeout(() => {
      if (this.mainVideo?.nativeElement) {
        this.mainVideo.nativeElement.load();
        this.mainVideo.nativeElement.play();
      }
    }, 0);
  }

  get visibleVideoThumbnails() {
    const extended = [...this.videoThumbnails, ...this.videoThumbnails];
    return extended.slice(
      this.videoStartIndex,
      this.videoStartIndex + this.visibleVideoCount
    );
  }

  // For looping carousel for videos
  visibleVideoCount = 3; // how many thumbnails you want to show at once
  videoStartIndex = 0;

  nextVideoThumb() {
    this.videoStartIndex =
      (this.videoStartIndex + 1) % this.videoThumbnails.length;
  }

  prevVideoThumb() {
    this.videoStartIndex =
      (this.videoStartIndex - 1 + this.videoThumbnails.length) %
      this.videoThumbnails.length;
  }

  // for pagination
  currentPage = 1;
  itemsPerPage = 10;

  get totalItems(): number {
    return this.products.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
