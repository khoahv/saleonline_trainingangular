import { Component, OnInit, Input, Output } from '@angular/core';
import { IProduct } from './../../../shared/IProduct'
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.css']
})
export class PhoneItemComponent implements OnInit {
  @Input() itemPhone: IProduct
  @Output() eventClickDetail = new EventEmitter;
  public status : boolean =false;
  constructor() { }

  ngOnInit() {

  }
  
  clickDetail(detail) {
    console.log(detail);
    this.eventClickDetail.emit(detail);
  }
  clickShowandHide(){
    this.status = !this.status;
    console.log(this.status);
    

  }
}
