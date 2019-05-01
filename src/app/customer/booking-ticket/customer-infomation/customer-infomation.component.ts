import { ShareDataService } from './../../services/share-data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-infomation',
  templateUrl: './customer-infomation.component.html',
  styleUrls: ['./customer-infomation.component.scss']
})
export class CustomerInfomationComponent implements OnInit {
  [x: string]: any;

  constructor(private shareDataService: ShareDataService,
              private location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
    this.shareDataService.setCurrentTag(2);
  }
  changeNextTag() {
    this.shareDataService.setCurrentTag(4);
  }
}
