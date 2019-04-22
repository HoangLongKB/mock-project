import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Hồ Chí Minh (SNG)', 'Hà Nội (HN)', 'Đà Nẵng (DN)'];
  filteredOptions: Observable<string[]>;

  constructor() {

  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  myFilter = (pickedDate: Date): boolean => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    if( pickedDate < now ) {
      return false;
    } else {
      return true;
    }
  }
}
