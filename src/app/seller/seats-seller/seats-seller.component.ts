import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-seats-seller',
  templateUrl: './seats-seller.component.html',
  styleUrls: ['./seats-seller.component.scss']
})
export class SeatsSellerComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Hồ Chí Minh (HCM)', 'Đà Nẵng (DN)', 'Hà Nội (HN)'];
  constructor() { }

  ngOnInit() {
  }

}
