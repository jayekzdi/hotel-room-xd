import { Price } from './../price';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
    prices:Price[]=[
      {img:'suitelife.jpg',hotel:'King Size',price:'200.00'},
      {img:'suitelife.jpg',hotel:'Queen Size',price:'300.00'},
      {img:'suitelife.jpg',hotel:'Deluxe Size',price:'200.00'},
    ];
     
  constructor() { }

  ngOnInit() {
  }

}
