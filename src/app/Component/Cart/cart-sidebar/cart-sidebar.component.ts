import { routes } from './../../../app.routes';
import { DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';

interface CartItems {
  id: number;
  name: string;
  sku: string;
  image: string;
  price: number;
  quantity: number;
  link: string;
}

@Component({
  selector: 'app-cart-sidebar',
  imports: [NgFor, NgClass, NgIf, DecimalPipe, RouterLink, RouterModule],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css',
})
export class CartSidebarComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  cartItems = [
    {
      id: 1,
      name: 'Brilliant Round White Diamond',
      sku: '24033',
      image: '/assets/images/product/check-product.png',
      price: 207000,
      quantity: 1,
      link: '/product-details',
    },
    {
      id: 2, // unique id
      name: 'Brilliant Round White Diamond',
      sku: '24034',
      image: '/assets/images/product/check-product.png',
      price: 100000,
      quantity: 1,
      link: '/product-details',
    },
  ];

  //  quantity control
  increaseQty(item: CartItems) {
    item.quantity++;
  }

  decreaseQty(item: CartItems) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
  // for single product price according to qty
  getItemTotal(item: CartItems): number {
    return item.price * item.quantity;
  }

  // all product price
  getCartTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + this.getItemTotal(item),
      0
    );
  }

  // for shiipping & tax
  shippingCharge = 100; // or dynamic from API
  tax = 0;

  // for total price including shipping & tax
  getFinalTotal(): number {
    return this.getCartTotal() + this.shippingCharge + this.tax;
  }

  // remove product from cart
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    if (this.cartItems.length === 0) {
      this.close.emit(); // close sidebar if empty
    }
  }

  constructor(private router: Router) {}
  // navigate to checkout
  goToCheckout() {
    this.close.emit(); // close sidebar first
    this.router.navigate(['/checkout']);
  }

  // navigate to cart page
  goToCart() {
    this.close.emit();
    this.router.navigate(['/cart']);
  }
}
