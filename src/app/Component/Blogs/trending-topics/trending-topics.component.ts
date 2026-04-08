import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trending-topics',
  imports: [NgFor, RouterLink],
  templateUrl: './trending-topics.component.html',
  styleUrl: './trending-topics.component.css'
})
export class TrendingTopicsComponent {
topics = [
    {
      title: 'Lab Diamonds vs Natural: 2024 Market Report',
      date: '12 Jan, 2025',
      link: '/blog/blog-details',
    },
    {
      title: 'Rare Gemstones Worth More Than Diamonds',
      date: '12 Jan, 2025',
      link: '/blog/blog-details',
    },
    {
      title: 'GIA vs AGS: Which Certification is Better?',
      date: '12 Jan, 2025',
      link: '/blog/blog-details',
    },
    {
      title: 'Lab Diamonds vs Natural: 2024 Market Report',
      date: '12 Jan, 2025',
      link: '/blog/blog-details',
    },
    {
      title: 'Rare Gemstones Worth More Than Diamonds',
      date: '12 Jan, 2025',
      link: '/blog/blog-details',
    },
    {
      title: 'GIA vs AGS: Which Certification is Better?',
      date: '12 Jan, 2025',
      link: '/blog/blog-details',
    },
    {
      title: 'Lab Diamonds vs Natural: 2024 Market Report',
      date: '12 Jan, 2025',
      link: '/blog/blog-details',
    },
    {
      title: 'Rare Gemstones Worth More Than Diamonds',
      date: '12 Jan, 2025',
      link: '/blog/blog-details',
    },
    {
      title: 'GIA vs AGS: Which Certification is Better?',
      date: '12 Jan, 2025',
      link: '/blog/blog-details',
    },
  ];
}
