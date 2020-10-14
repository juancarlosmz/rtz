import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  

  title = 'NgxCarouselLibrary';
	public innerWidth: any;
	products: any;
	products2: any;
	products3: any;
	options1: any;
	options2: any;
	options3: any;

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;



    this.options1 = {
			animation: {
				animationClass: 'transition',
				animationTime: 500,
			},
			swipe: {
				swipeable: true,
				swipeVelocity: .004,
			},
			drag: {
				draggable: true,
				dragMany: true,
			},
      arrows: true,
			infinite: true,
			autoplay: {
				enabled: true,
				direction: 'right',
				delay: 5000,
				stopOnHover: true,
				speed: 6000,
			},
			breakpoints: [
				{
					width: 768,
					number: 1,
				},
				{
					width: 991,
					number: 3,
				},
				{
					width: 9999,
					number: 4,
				},
			],
		}
		this.options2 = {
			animation: {
				animationClass: 'transition', // done
				animationTime: 500,
			},
			swipe: {
				swipeable: true, // done
				swipeVelocity: .004, // done - check amount
			},
			drag: {
				draggable: true, // done
				dragMany: true, // todo
			},
      autoplay: {
				enabled: true,
				direction: 'right',
				delay: 5000,
				stopOnHover: true,
				speed: 6000,
			},
      arrows: true,
			infinite: false,
			breakpoints: [
				{
					width: 768,
					number: 1,
				},
				{
					width: 991,
					number: 3,
				},
				{
					width: 9999,
					number: 3,
				},
			],
		}
		this.options3 = {
			animation: {
				animationClass: 'transition', // done
				animationTime: 500,
			},
			swipe: {
				swipeable: true, // done
				swipeVelocity: .004, // done - check amount
			},
			drag: {
				draggable: true, // done
				dragMany: true, // todo
			},
      autoplay: {
				enabled: true,
				direction: 'right',
				delay: 5000,
				stopOnHover: true,
				speed: 6000,
			},
      arrows: true,
			infinite: true,
			breakpoints: [
				{
					width: 768,
					number: 1,
				},
				{
					width: 991,
					number: 3,
				},
				{
					width: 9999,
					number: 4,
				},
			],
		}
		this.products = []
		this.products.push({
			title: 'Red Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			salePrice: '100.00',
			image: `https://picsum.photos/600/400/?0`,
		})
		this.products.push({
			title: 'Yellow Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			salePrice: '100.00',
			image: `https://picsum.photos/600/400/?1`,
		})
		this.products.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			salePrice: '100.00',
			image: `https://picsum.photos/600/400/?2`,
		})
		this.products.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?3`,
		})
		this.products.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?4`,
		})
		this.products2 = []
		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?5`,
		})
		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?6`,
		})
		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?7`,
		})
    this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?6`,
		})
		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?7`,
		})
		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?8`,
		})
    		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?8`,
		})
    		this.products2.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?8`,
		})
    		this.products3 = []
		this.products3.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?5`,
		})
		this.products3.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?6`,
		})
		this.products3.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?7`,
		})
    this.products3.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?6`,
		})
		this.products3.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?7`,
		})
		this.products3.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?8`,
		})
    this.products3.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?8`,
		})
    this.products3.push({
			title: 'Black Widgets',
			url: 'https://url',
			regularPrice: '100.00',
			image: `https://picsum.photos/600/400/?8`,
		})





   }

  ngOnInit(): void {
  }
  

}
