import { Component, OnInit, Input } from '@angular/core';
import {IPopUp} from './../../shared/IPopUp'
@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.css']
})
export class DialogDetailComponent implements OnInit {
  @Input() title;
  @Input() description;

  @Input() price;

  constructor() { }

  ngOnInit() {
  }

}
