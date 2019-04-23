import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  options: string[] = ['Hồ Chí Minh (SNG)', 'Hà Nội (HN)', 'Đà Nẵng (DN)'];
  myControl = new FormControl(this.options[0]);
  myControlTo = new FormControl(this.options[1]);
  dateControl = new FormControl(new Date());
  dateControlReturn = new FormControl(new Date());
  filteredOptions: Observable<string[]>;
  filteredOptionsTo: Observable<string[]>;
  fromValue: string = '';
  toValue: string = '';

  constructor() {
  }

  ngOnInit() {
    this.fromValue = this.options[0];
    this.toValue = this.options[1];
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => {
        if ( value !== '' ) {
          this.fromValue = value;
        }
        return this._filter(value);
      })
    );
    this.filteredOptionsTo = this.myControlTo.valueChanges
    .pipe(
      startWith(''),
      map(value => {
        if ( value !== '' ) {
          this.toValue = value;
        }
        return this._filter(value);
      })
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  rotateFromTo() {
    const temp = this.fromValue;
    this.fromValue = this.toValue;
    this.toValue = temp;

    this.myControl.setValue(this.fromValue);
    this.myControlTo.setValue(this.toValue);
  }

  myFilter = (pickedDate: Date): boolean => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    if ( pickedDate <= now) {
      return false;
    } else {
      return true;
    }
  }
  myFilter2 = (pickedDate: Date): boolean => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    if ( pickedDate <= now || pickedDate < this.dateControl.value) {
      return false;
    } else {
      return true;
    }
  }
  getDateChange(event) {
    if (event.value > this.dateControlReturn.value) {
      this.dateControlReturn.setValue(event.value);
    }
  }

  clearInputTo(myControlTo: FormControl){
    myControlTo.setValue('');
  }
  clearInputFrom(myControl: FormControl){
    myControl.setValue('');
  }
}
