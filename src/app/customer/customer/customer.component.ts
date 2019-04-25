import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  options: string[] = ['Hồ Chí Minh (SNG)', 'Hà Nội (HN)', 'Đà Nẵng (DN)'];
  dateControl = new FormControl(new Date());
  dateControlReturn = new FormControl(new Date());
  filteredOptions: Observable<string[]>;
  filteredOptionsTo: Observable<string[]>;
  fromValue = '';
  toValue = '';
  busRoutes: FormGroup;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.busRoutes = this.formBuilder.group({
      type: [1],
      places: this.formBuilder.group({
        from: ['Hồ Chí Minh (SNG)'],
        to: ['Hà Nội (HN)']
      }),
      date: this.formBuilder.group({
        departure: [new Date()],
        _return: [new Date()]
      })
    });
  }

  ngOnInit() {

    this.fromValue = this.options[0];
    this.toValue = this.options[1];
    this.filteredOptions = this.busRoutes.get('places').get('from').valueChanges
    .pipe(
      startWith(''),
      map(value => {
        if ( value !== '' ) {
          this.fromValue = value;
        }
        return this._filter(value);
      })
    );
    this.filteredOptionsTo = this.busRoutes.get('places').get('to').valueChanges
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

    this.busRoutes.get('places').get('from').setValue(this.fromValue);
    this.busRoutes.get('places').get('to').setValue(this.toValue);
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

  clearInputTo(){
    this.busRoutes.get('places').get('to').setValue('');
  }
  clearInputFrom(){
    this.busRoutes.get('places').get('from').setValue('');
  }
  onSubmit({value, valid}) {
    // alert(JSON.stringify(value));
    if (value.places.from === value.places.to) {
      this.snackBar.open('Departure Place and Return Place must be different' ,'Close' ,{
        duration: 3000,
        panelClass: ['my-snack']
      });
    }
  }
}
