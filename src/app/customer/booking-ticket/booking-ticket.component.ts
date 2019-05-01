import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.scss']
})
export class BookingTicketComponent implements OnInit {
  private isTagActive = 1;

  constructor(private shareDateService: ShareDataService) {
    this.shareDateService.getCurrentTag().subscribe(
      tagNumber => {
        this.isTagActive = tagNumber;
      }
    );
  }

  ngOnInit() {
  }

}
