import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component implements OnInit {
  @Input() title;
  @Input() description;

  @Input() price;
  constructor() { }

  ngOnInit() {
  }

}
