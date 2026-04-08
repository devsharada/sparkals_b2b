import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthComponent } from '../../Unauth/auth/auth.component';

interface NavItem {
  label: string;
  path: string;
}

interface MenuItem {
  label: string;
  path: string;
  image: string;
  alt: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgFor, RouterLinkActive, NgIf, NgClass, AuthComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // login popup functionality

  isAuthOpen = false;
  activeAuthTab: 'login' | 'register' = 'login';

  openAuth(tab: 'login' | 'register' = 'login') {
    this.activeAuthTab = tab;
    this.isAuthOpen = true;
  }

  closeAuth() {
    this.isAuthOpen = false;
  }
  // header menu for mobile & desktop functionality

  isMobileMenuOpen = false;
  isAccordionOpen = false;
  openCategoryIndex: number | null = null;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }

  toggleCategory(index: number) {
    this.openCategoryIndex = this.openCategoryIndex === index ? null : index;
  }

  activeMenu: string | null = null;

  navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  categories: MenuCategory[] = [
    {
      title: 'Gemstones',
      items: [
        {
          label: 'Blue Sapphire',
          path: '/gemstones/blue_sapphire',
          image: '/assets/images/home/blue-sapphire.png',
          alt: 'Blue Sapphire',
        },
        {
          label: 'Emerald',
          path: '/gemstones/emerald',
          image: '/assets/images/home/emerald.png',
          alt: 'Emerald',
        },
        {
          label: 'Yellow Sapphire',
          path: '/gemstones/yellow_sapphire',
          image: '/assets/images/home/yellow-sapphire.png',
          alt: 'Yellow Sapphire',
        },
        {
          label: 'Ruby',
          path: '/gemstones/ruby',
          image: '/assets/images/home/ruby.png',
          alt: 'Ruby',
        },
      ],
    },
    {
      title: 'Diamonds',
      items: [
        {
          label: 'Round Diamond',
          path: '/diamonds/round',
          image: '/assets/images/home/round-diamond.png',
          alt: 'Round Diamond',
        },
        {
          label: 'Oval White Diamond',
          path: '/diamonds/oval',
          image: '/assets/images/home/oval-white-diamond.png',
          alt: 'Oval White Diamond',
        },
        {
          label: 'Heart Cryst Diamond',
          path: '/diamonds/heart',
          image: '/assets/images/home/heart-cryst-diamond.png',
          alt: 'Heart Crystal Diamond',
        },
        {
          label: 'Hexagon Cut Diamond',
          path: '/diamonds/hexagon',
          image: '/assets/images/home/hexagon-cut-diamond.png',
          alt: 'Hexagon Cut Diamond',
        },
      ],
    },
    {
      title: 'Gold',
      items: [
        {
          label: 'Rings',
          path: '/gold/rings',
          image: '/assets/images/home/gold-ring.png',
          alt: 'Gold Ring',
        },
        {
          label: 'Necklaces',
          path: '/gold/necklaces',
          image: '/assets/images/home/gold-necklace.png',
          alt: 'Gold Necklace',
        },
        {
          label: 'Earrings',
          path: '/gold/earrings',
          image: '/assets/images/home/gold-earring.png',
          alt: 'Gold Earring',
        },
        {
          label: 'Bracelet',
          path: '/gold/bracelets',
          image: '/assets/images/home/gold-bracelet.png',
          alt: 'Gold Bracelet',
        },
      ],
    },
    {
      title: 'Silver',
      items: [
        {
          label: 'Rings',
          path: '/silver/rings',
          image: '/assets/images/home/silver-ring.png',
          alt: 'Silver Ring',
        },
        {
          label: 'Pendants',
          path: '/silver/pendants',
          image: '/assets/images/home/silver-pendant.png',
          alt: 'Silver Pendant',
        },
        {
          label: 'Anklets',
          path: '/silver/anklets',
          image: '/assets/images/home/silver-anklet.png',
          alt: 'Silver Anklet',
        },
      ],
    },
  ];
}
