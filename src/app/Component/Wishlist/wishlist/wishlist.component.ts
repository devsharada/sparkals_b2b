import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { BreadcrumbComponent } from "../../Core/breadcrumb/breadcrumb.component";

interface Product {
  id: number;
  name: string;
  image1: string;
  image2: string;
  weight: string;
  clarity: string;
  link: string;
}

@Component({
  selector: 'app-wishlist',
  imports: [RouterLink, NgFor, BreadcrumbComponent, NgIf],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

    products1 = [
    {
      id: 1,
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-ring.png',
      image2: 'assets/images/product/diamond-pendant.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      id: 2,
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-necklace.png',
      image2: 'assets/images/product/diamond-bracelet.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      id: 3,
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-ring1.png',
      image2: 'assets/images/product/diamond-ring.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      id: 4,
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-bracelet.png',
      image2: 'assets/images/product/diamond-necklace.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      id: 5,
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-pendant.png',
      image2: 'assets/images/product/diamond-ring1.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
    {
      id: 6,
      name: 'Brilliant Round White Diamond',
      image1: 'assets/images/product/diamond-ring1.png',
      image2: 'assets/images/product/diamond-ring.png',
      weight: '2.50 ct',
      clarity: 'VVS1 (Round)',
      link: '/product-details',
    },
  ];


   // Remove item from wishlist
  removeItem(id: number) {
    this.products1 = this.products1.filter(item => item.id !== id);
  }
}
