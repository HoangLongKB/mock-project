import { ShareDataService } from './../../services/share-data.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    private location: Location,
    private shareDataService: ShareDataService
    ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
    this.shareDataService.setCurrentTag(3);
  }

}
