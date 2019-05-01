import { ShareDataService } from './../../services/share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-infomation',
  templateUrl: './customer-infomation.component.html',
  styleUrls: ['./customer-infomation.component.scss']
})
export class CustomerInfomationComponent implements OnInit {

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
  }

}
