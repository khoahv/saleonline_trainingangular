import { Component, OnInit, Input , Output} from '@angular/core';
import {IProduct} from '../../../shared/IProduct';
import { EventEmitter} from '@angular/core';
@Component({
  selector: 'app-laptop-item',
  templateUrl: './laptop-item.component.html',
  styleUrls: ['./laptop-item.component.css']
})
export class LaptopItemComponent implements OnInit {
  @Input() itemLapTop: IProduct
  @Output() eventClickDetail = new EventEmitter;
public status : boolean = false;
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
