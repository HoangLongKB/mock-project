import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-choose-seat',
  templateUrl: './choose-seat.component.html',
  styleUrls: ['./choose-seat.component.scss']
})
export class ChooseSeatComponent implements OnInit {

   totalPrice = 0;
   choosenSeatList = '';
   choosenSeats = [];
   choosenSeatsNumber = [];
   seats = [
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
  constructor(private shareDateService: ShareDataService) {
  }
  ngOnInit() {
    this.choosenSeats.forEach(
      seat => {
        this.choosenSeatsNumber.push(seat.number);
      }
    );
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
      this.popChoosenSeatList(selectedSeat.number);
    } else {
      this.choosenSeats.push(selectedSeat);
      this.totalPrice += selectedSeat.price;
      this.pushChoosenSeatList(selectedSeat.number);
    }
    console.log(JSON.stringify(this.choosenSeats));

  }

  popChoosenSeatList(seatNumber) {
    this.choosenSeatsNumber = this.choosenSeatsNumber.filter(
      seat => {
        return seat != seatNumber;
      }
    );
    this.choosenSeatList = '';
    this.choosenSeatList = this.choosenSeatsNumber.join(',');
  }
  pushChoosenSeatList(seatNumber) {
    this.choosenSeatsNumber.push(seatNumber);
    this.choosenSeatList = '';
    this.choosenSeatList = this.choosenSeatsNumber.join(',');
  }

  checkChoosenSeats(number) {
    return this.choosenSeats.some(seat => {
      return seat.number == number;
    });
  }

  changeNextTag() {
    this.shareDateService.setCurrentTag(3);
  }

}
