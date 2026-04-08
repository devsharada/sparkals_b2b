import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartSidebarComponent } from "../../Cart/cart-sidebar/cart-sidebar.component";

@Component({
  selector: 'app-product-info',
  imports: [NgClass, NgIf, NgFor, CartSidebarComponent],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css',
})
export class ProductInfoComponent implements OnInit {
  // Main product images
  mainImage = '/assets/images/product/product1.png';
  thumbnails = [
    '/assets/images/product/product1.png',
    '/assets/images/product/product2.png',
    '/assets/images/product/product3.png',
    '/assets/images/product/product4.png',
    '/assets/images/product/product5.png',
  ];

  selectedImage: string = this.thumbnails[0];
  zoomOpen = false;
  zoomIndex = 0;

  // For looping carousel
  visibleCount = 5; // number of thumbnails visible at once
  startIndex = 0;
  autoSlideInterval: any;

  get visibleThumbnails() {
    const extended = [...this.thumbnails, ...this.thumbnails]; // double for looping
    return extended.slice(this.startIndex, this.startIndex + this.visibleCount);
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  openZoom(index: number) {
    this.zoomIndex = index;
    this.zoomOpen = true;
  }

  closeZoom() {
    this.zoomOpen = false;
  }

  nextThumb() {
    this.startIndex = (this.startIndex + 1) % this.thumbnails.length;
  }

  prevThumb() {
    this.startIndex =
      (this.startIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
  }

  nextImage() {
    this.zoomIndex = (this.zoomIndex + 1) % this.thumbnails.length;
  }

  prevImage() {
    this.zoomIndex =
      (this.zoomIndex - 1 + this.thumbnails.length) % this.thumbnails.length;
  }

  // More design images
  moreDesignImages = [
    '/assets/images/product/ring1.png',
    '/assets/images/product/ring2.png',
    '/assets/images/product/ring3.png',
  ];

  // Selected states
  selectedCategory: string | null = null;

  ngOnInit() {
    if (this.thumbnails && this.thumbnails.length > 0) {
      this.selectedImage = this.thumbnails[0]; // default first image
    }
  }

  /** Select customization category */
  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  selectedMoreDesign: string | null = null; // for more design section

  selectMoreDesign(img: string) {
    this.selectedMoreDesign = img; // only one image is stored
  }

  // pooja energization popup

  isPopupOpen = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  // cart sidebar functionality
   isCartOpen = false;

  openCart() {
    this.isCartOpen = true;
  }
  closeCart() {
    this.isCartOpen = false;
  }
}
