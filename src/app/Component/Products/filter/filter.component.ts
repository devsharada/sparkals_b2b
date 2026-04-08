import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Shape {
  name: string;
  icon: string;
  selected: boolean;
}

@Component({
  selector: 'app-filter',
  imports: [NgFor, NgIf, NgStyle, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  @ViewChild('scrollFilterContainer', { static: false })
  scrollFilterContainer!: ElementRef;

  filters: string[] = [
    'Shapes',
    'Color',
    'Carat',
    'Clarity',
    'Lab',
    'Shortcut',
    'Finish',
    'Intensity',
    'Location',
    'Fluorescence',
    'Shady & Milky',
    'Price',
    'Measurement',
    'Brand',
    'Origin',
    'Key to Symbols',
  ];

  // shape
  shapes: Shape[] = [
    {
      name: 'Princess',
      icon: '/assets/images/filter/princess.png',
      selected: false,
    },
    {
      name: 'Asscher',
      icon: '/assets/images/filter/asscher.png',
      selected: false,
    },
    {
      name: 'Cushion',
      icon: '/assets/images/filter/cushion.png',
      selected: false,
    },
    {
      name: 'Emerald',
      icon: '/assets/images/filter/emerald.png',
      selected: false,
    },
    { name: 'Oval', icon: '/assets/images/filter/oval.png', selected: false },
    {
      name: 'Marquise',
      icon: '/assets/images/filter/marquise.png',
      selected: false,
    },
    { name: 'Pear', icon: '/assets/images/filter/pear.png', selected: false },
    {
      name: 'Radiant',
      icon: '/assets/images/filter/radiant.png',
      selected: false,
    },
    { name: 'Heart', icon: '/assets/images/filter/heart.png', selected: false },
    {
      name: 'Trillion',
      icon: '/assets/images/filter/trillion.png',
      selected: false,
    },
  ];

  // color
  colors = [
    { name: 'D', selected: false },
    { name: 'E', selected: false },
    { name: 'F', selected: false },
    { name: 'G', selected: false },
    { name: 'H', selected: false },
    { name: 'I', selected: false },
    { name: 'J', selected: false },
    { name: 'K', selected: false },
    { name: 'L', selected: false },
    { name: 'M', selected: false },
    { name: 'N', selected: false },
    { name: 'OP', selected: false },
    { name: 'QR', selected: false },
    { name: 'ST', selected: false },
    { name: 'UV', selected: false },
    { name: 'WX', selected: false },
    { name: 'YZ', selected: false },
  ];

  // clarity
  clarities = [
    { name: 'FL', selected: false },
    { name: 'IF', selected: false },
    { name: 'VVS1', selected: false },
    { name: 'VVS2', selected: false },
    { name: 'VS1', selected: false },
    { name: 'VS2', selected: false },
    { name: 'SI1', selected: false },
    { name: 'SI2', selected: false },
    { name: 'SI3', selected: false },
  ];

  // lab
  labs = [
    { name: 'GAI', selected: false },
    { name: 'IGI', selected: false },
    { name: 'HRD', selected: false },
    { name: 'AGS', selected: false },
  ];

  // shortcut
  shortcuts = [
    { name: '3EX', selected: false },
    { name: '3EXNON', selected: false },
    { name: '3VG+', selected: false },
    { name: '100% EYCLEAN', selected: false },
  ];

  // finish
  cuts = [
    { name: 'ID', selected: false },
    { name: 'EX', selected: false },
    { name: 'VG', selected: false },
    { name: 'GD', selected: false },
    { name: 'FR', selected: false },
    { name: 'pR', selected: false },
  ];
  polishes = [
    { name: 'ID', selected: false },
    { name: 'EX', selected: false },
    { name: 'VG', selected: false },
    { name: 'GD', selected: false },
    { name: 'FR', selected: false },
    { name: 'pR', selected: false },
  ];
  symmetries = [
    { name: 'ID', selected: false },
    { name: 'EX', selected: false },
    { name: 'VG', selected: false },
    { name: 'GD', selected: false },
    { name: 'FR', selected: false },
    { name: 'pR', selected: false },
  ];

  // intensity
  intensities = [
    { name: 'Faint', selected: false },
    { name: 'Very Light', selected: false },
    { name: 'Light', selected: false },
    { name: 'Fancy Light', selected: false },
    { name: 'Fancy', selected: false },
    { name: 'Fancy Intense', selected: false },
    { name: 'Fancy Vivid', selected: false },
    { name: 'Fancy Deep', selected: false },
    { name: 'Fancy Dark', selected: false },
  ];

//locations
  locations: string[] = ['Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Chennai'];
  selectedLocations: string[] = [];

  // fluorescence
  fluorescences = [
    { name: 'None', selected: false },
    { name: 'Faint', selected: false },
    { name: 'Medium', selected: false },
    { name: 'Strong', selected: false },
    { name: 'Very Strong', selected: false },
  ];
  // shady & milky
  shadies = [
    { name: 'None', selected: false },
    { name: 'Light Green', selected: false },
    { name: 'Brown', selected: false },
    { name: 'Light Green', selected: false },
    { name: 'Green', selected: false },
    { name: 'Gray', selected: false },
    { name: 'Black', selected: false },
    { name: 'Pink', selected: false },
    { name: 'Blue', selected: false },
    { name: 'Mix Tinge', selected: false },
    { name: 'Unknown', selected: false },
  ];
  milkies = [
    { name: 'No Milky', selected: false },
    { name: 'Light Milky', selected: false },
    { name: 'Milky', selected: false },
    { name: 'Unknown', selected: false },
  ];

  // measurement
  measurements1 = [
    { name: 'Measurement Length', selected: false },
    { name: 'Measurement Width', selected: false },
    { name: 'Measurement height', selected: false },
  ];
  measurements2 = [
    { name: 'Table%', selected: false },
    { name: 'Depth%', selected: false },
    { name: 'Ratio%', selected: false },
  ];
  measurements3 = [
    { name: 'Crown Height', selected: false },
    { name: 'Crown Angle', selected: false },
  ];
  measurements4 = [
    { name: 'Pavilion Height', selected: false },
    { name: 'Pavilion Angle', selected: false },
  ];

  // brand
  brands = [
    { name: 'Canada Mark', selected: false },
    { name: 'Argle', selected: false },
    { name: 'Forever Mark', selected: false },
    { name: 'Other', selected: false },
  ];

  // Origin
origins = [
  { name: 'Australia', selected: false },
  { name: 'Angola', selected: false },
  { name: 'Botswana', selected: false },
  { name: 'Brazil', selected: false },
  { name: 'Canada', selected: false },
  { name: 'Congo', selected: false },
  { name: 'Dtc', selected: false },
  { name: 'Lesotho', selected: false },
  { name: 'Liberia', selected: false },
  { name: 'Namibia', selected: false },
  { name: 'Russia', selected: false },
  { name: 'Sierra Leone', selected: false },
  { name: 'South Africa', selected: false },
  { name: 'Tanzania', selected: false },
  { name: 'Zimbabwe', selected: false },
  { name: 'Other', selected: false }
];

  // key to symbol
symbols = [
  { name: 'Bearding', selected: false },
  { name: 'Brown Patch of Color', selected: false },
  { name: 'Needle', selected: false },
  { name: 'No Inclusion', selected: false },
  { name: 'Pinpoint', selected: false },
  { name: 'Reflecting Surface Graining', selected: false },
  { name: 'Surface Graining', selected: false },
  { name: 'Twinning Wisp', selected: false },
  { name: 'Crystal', selected: false },
  { name: 'Bruise', selected: false },
  { name: 'Cavity', selected: false },
  { name: 'Chip', selected: false },
  { name: 'Cleavage', selected: false },
  { name: 'Cloud', selected: false },
  { name: 'Internal Graining', selected: false },
  { name: 'Crystal Surface', selected: false },
  { name: 'Etch Channel', selected: false },
  { name: 'Extra Facet', selected: false },
  { name: 'Feather', selected: false },
  { name: 'Flux Remnant', selected: false },
  { name: 'Indented Natural', selected: false },
  { name: 'Natural', selected: false },
  { name: 'Internal Inscription', selected: false },
  { name: 'Internal Laser Drilling', selected: false },
  { name: 'Knot', selected: false },
  { name: 'Laser Drill Hole', selected: false },
  { name: 'Manufacturing Remnant', selected: false },
  { name: 'Minor Details of Polish', selected: false },
];


  // price slider code start
  min = 0;
  max = 100000;
  rangeMin = 100; // minimum gap between min & max

  minValue = 20000;
  maxValue = 80000;

  // Prevent left thumb from going over right
  onMinInput() {
    if (this.minValue > this.maxValue - this.rangeMin) {
      this.minValue = this.maxValue - this.rangeMin;
    }
  }

  // Prevent right thumb from going over left
  onMaxInput() {
    if (this.maxValue < this.minValue + this.rangeMin) {
      this.maxValue = this.minValue + this.rangeMin;
    }
  }

  // Handle manual number inputs
  onPriceInput(type: 'min' | 'max') {
    if (type === 'min') {
      if (this.minValue < this.min) this.minValue = this.min;
      if (this.minValue > this.maxValue - this.rangeMin) {
        this.minValue = this.maxValue - this.rangeMin;
      }
    } else {
      if (this.maxValue > this.max) this.maxValue = this.max;
      if (this.maxValue < this.minValue + this.rangeMin) {
        this.maxValue = this.minValue + this.rangeMin;
      }
    }
  }
  // price slider code end

  carat: any;

  // toggle for filter div
  activeCategory: string | null = null;

  constructor(private eRef: ElementRef) {}

  toggleCategory(category: string) {
    this.activeCategory = this.activeCategory === category ? null : category;
  }

  toggleShape(shape: Shape) {
    shape.selected = !shape.selected;
  }

  // left right scroll movement
  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -150,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 150,
      behavior: 'smooth',
    });
  }

  scrollFilterLeft() {
    this.scrollFilterContainer.nativeElement.scrollBy({
      left: -150,
      behavior: 'smooth',
    });
  }

  scrollFilterRight() {
    this.scrollFilterContainer.nativeElement.scrollBy({
      left: 150,
      behavior: 'smooth',
    });
  }

  // to close category feature div
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.activeCategory = null;
    }
  }
}
