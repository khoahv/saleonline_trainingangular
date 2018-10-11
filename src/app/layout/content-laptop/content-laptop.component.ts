import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-laptop',
  templateUrl: './content-laptop.component.html',
  styleUrls: ['./content-laptop.component.css']
})
export class ContentLaptopComponent implements OnInit {
popUpName: any;
public title: String ="";
public description: String ="";
public price: String = "";
 public listLapTop: Array<any> = [
    {
      title: 'MACBOOK',
      img: './../../../assets/img/lt_macbook.png',
      description: 'The MacBook is a brand of notebook computers manufactured by Apple Inc',
      price: '1000'
    },
    {
      title: 'ASUS ROG',
      img: './../../../assets/img/lt_rog.png',
      description: 'the Asus ROG Strix Flare is the latest addition to Asus lineup of ROG branded devices',
      price: '800'
    },
    {
      title: 'HP OMEN',
      img: './../../../assets/img/lt_hp.png',
      description: 'A young global smartphone brand focusing on introducing perfect sound quality',
      price: '1000'
    },
    {
      title: 'LENOVO THINKPAD',
      img: './../../../assets/img/lt_lenovo.png',
      description: 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012',
      price: '700'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  recviveEventDetail(phoneitem){
    this.title = phoneitem.title;
    this.description = phoneitem.description;
    this.price = phoneitem.price
    
  }

}
