import { Component, OnInit } from '@angular/core';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.scss']
})
export class BookingTicketComponent implements OnInit {
  private isTagActive = 2;
  private totalPrice = 0;
  private choosenSeats = [];
  private seats = [
    {
      number: 1,
      status: true,
      price: 100000
    },
    {
      number: 2,
      status: false,
      price: 100000
    },
    {
      number: 4,
      status: false,
      price: 100000
    },
    {
      number: 5,
      status: true,
      price: 100000
    },
    {
      number: 6,
      status: false,
      price: 100000
    },
    {
      number: 7,
      status: false,
      price: 100000
    },
    {
      number: 8,
      status: true,
      price: 100000
    },
    {
      number: 9,
      status: false,
      price: 100000
    },
    {
      number: 10,
      status: true,
      price: 100000
    },
    {
      number: 11,
      status: false,
      price: 100000
    },
    {
      number: 12,
      status: false,
      price: 100000
    },
    {
      number: 13,
      status: false,
      price: 100000
    },
    {
      number: 14,
      status: false,
      price: 100000
    },
    {
      number: 15,
      status: false,
      price: 100000
    },
    {
      number: 16,
      status: false,
      price: 100000
    },
    {
      number: 17,
      status: false,
      price: 100000
    },
    {
      number: 18,
      status: false,
      price: 100000
    },
    {
      number: 19,
      status: false,
      price: 100000
    },
    {
      number: 20,
      status: true,
      price: 100000
    }
  ];
  constructor() { }
  ngOnInit() {
  }
  addSelectedSeat(selectedSeat){
    const flag =  this.choosenSeats.some(seat => {
      return seat.number == selectedSeat.number;
    });
    if(flag) {
      this.choosenSeats = this.choosenSeats.filter(item => {
        return item.number != selectedSeat.number;
      });
      this.totalPrice -= selectedSeat.price;
    } else {
      this.choosenSeats.push(selectedSeat);
      this.totalPrice += selectedSeat.price;
    }
    console.log(JSON.stringify(this.choosenSeats));
  }
  checkChoosenSeats(number) {
    return this.choosenSeats.some(seat => {
      return seat.number == number;
    });
  }

}
