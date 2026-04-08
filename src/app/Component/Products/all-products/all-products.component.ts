import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-products',
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
  products1 = [
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/ruby.png',
      image2: 'assets/images/product/yellow-sapphire.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/yellow-sapphire.png',
      image2: 'assets/images/product/blue-sapphire.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/blue-sapphire.png',
      image2: 'assets/images/product/pink-sapphire.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/emerald.png',
      image2: 'assets/images/product/ruby.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/pink-sapphire.png',
      image2: 'assets/images/product/yellow-sapphire.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      price: '₹ 2,00,000',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/brilliant-round-shape-diamond.png',
      image2: 'assets/images/product/cushion-shape-diamond.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/pear-shape-diamond.png',
      image2: 'assets/images/product/oval-shape-diamond.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/cushion-shape-diamond.png',
      image2: 'assets/images/product/brilliant-round-shape-diamond.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/oval-shape-diamond.png',
      image2: 'assets/images/product/emerald-shape-diamond.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/emerald-shape-diamond.png',
      image2: 'assets/images/product/pear-shape-diamond.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/oval-shape-diamond.png',
      image2: 'assets/images/product/cushion-shape-diamond.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-ring.png',
      image2: 'assets/images/product/diamond-pendant.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-necklace.png',
      image2: 'assets/images/product/diamond-bracelet.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-ring1.png',
      image2: 'assets/images/product/diamond-ring.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-bracelet.png',
      image2: 'assets/images/product/diamond-necklace.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-pendant.png',
      image2: 'assets/images/product/diamond-ring1.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-ring1.png',
      image2: 'assets/images/product/diamond-ring.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },

  ];

  // offer images
  bannerImages: string[] = [
    '/assets/images/home/diamond-offer1.png',
    '/assets/images/home/diamond-offer1.png',
    '/assets/images/home/diamond-offer1.png',
  ];
 getBannerImage(index: number): string {
  // Example: show different banner after 12, 24, 36 cards...
  const bannerIndex = Math.floor((index + 1) / 12) - 1;
  return this.bannerImages[bannerIndex % this.bannerImages.length];
}
}
