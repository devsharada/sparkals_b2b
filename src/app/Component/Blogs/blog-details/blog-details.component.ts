import { Component } from '@angular/core';
import { TrendingTopicsComponent } from "../trending-topics/trending-topics.component";
import { BreadcrumbComponent } from "../../Core/breadcrumb/breadcrumb.component";
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  imports: [TrendingTopicsComponent, BreadcrumbComponent, NgClass, NgFor, RouterLink],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
   blogs = [
    {
      img: '/assets/images/blog/blog1.png',
      alt: 'emerald blog',
      link: '/blogs/blog-details',
      stone: 'Emeralds',
      title: 'Emeralds: The Captivating Green Gems of Ancient Royalty',
      content:
        'Discover the allure of emeralds, from their geological formation to grading criteria and famous specimens throughout history.',
      date: '12 Jan, 2025',
    },
    {
      img: '/assets/images/blog/blog2.png',
      alt: 'emerald blog',
      link: '/blogs/blog-details',
      stone: 'Sapphires',
      title: 'Sapphires – More Than Blue: Exploring the Rainbow of Corundum',
      content:
        'Discover the allure of emeralds, from their geological formation to grading criteria and famous specimens throughout history.',
      date: '12 Jan, 2025',
    },
    {
      img: '/assets/images/blog/blog3.png',
      alt: 'emerald blog',
      link: '/blogs/blog-details',
      stone: 'Ruby',
      title: 'Ruby: The King of Gems and a Symbol of Passion, Love and Power',
      content:
        'Discover the allure of emeralds, from their geological formation to grading criteria and famous specimens throughout history.',
      date: '12 Jan, 2025',
    },
    {
      img: '/assets/images/blog/blog4.png',
      alt: 'emerald blog',
      link: '/blogs/blog-details',
      stone: 'Emeralds',
      title: 'Emeralds: The Captivating Green Gems of Ancient Royalty',
      content:
        'Discover the allure of emeralds, from their geological formation to grading criteria and famous specimens throughout history.',
      date: '12 Jan, 2025',
    },
    {
      img: '/assets/images/blog/blog1.png',
      alt: 'emerald blog',
      link: '/blogs/blog-details',
      stone: 'Emeralds',
      title: 'Emeralds: The Captivating Green Gems of Ancient Royalty',
      content:
        'Discover the allure of emeralds, from their geological formation to grading criteria and famous specimens throughout history.',
      date: '12 Jan, 2025',
    },
    {
      img: '/assets/images/blog/blog2.png',
      alt: 'emerald blog',
      link: '/blogs/blog-details',
      stone: 'Sapphires',
      title: 'Sapphires – More Than Blue: Exploring the Rainbow of Corundum',
      content:
        'Discover the allure of emeralds, from their geological formation to grading criteria and famous specimens throughout history.',
      date: '12 Jan, 2025',
    },
  ];

  // for pagination
  currentPage = 1;
  itemsPerPage = 6;

  get totalItems(): number {
    return this.blogs.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedBlogs() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.blogs.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
