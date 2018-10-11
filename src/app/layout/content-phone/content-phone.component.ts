import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../shared/IProduct'
@Component({
  selector: 'app-content-phone',
  templateUrl: './content-phone.component.html',
  styleUrls: ['./content-phone.component.css']
})
export class ContentPhoneComponent implements OnInit {
  public title: String ="";
  public description: String ="";
  public price: String = "";
  public listPhone: Array<any> = [
   
      {
        title: 'iPhone X',
        img: './../../../assets/img/sp_iphoneX.png',
        description: 'iPhone X features a new all-screen design. Face ID, which makes your face your password',
        price: '1000'
      },
      {
        title: 'Galaxy Note7',
        img: './../../../assets/img/sp_note7.png',
        description: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason',
        price: '700'
      },
      {
        title: 'Vivo',
        img: './../../../assets/img/sp_vivo850.png',
        description: 'A young global smartphone brand focusing on introducing perfect sound quality',
        price: '500'
      },
      {
        title: 'Blackberry',
        img: './../../../assets/img/sp_blackberry.png',
        description: 'BlackBerry is a line of smartphones, tablets, and services originally designed',
        price: '400'
      }

  ]
  constructor() { }

  ngOnInit() {
  }
  recviveEventDetail(phoneitem){
    this.title = phoneitem.title;
    this.description = phoneitem.description;
    this.price = phoneitem.price
    
    
  }
}
