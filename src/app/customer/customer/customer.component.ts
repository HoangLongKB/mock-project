import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Renderer2 } from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @ViewChild('inputFrom', {read: MatAutocompleteTrigger}) autoCompleteInputFrom: MatAutocompleteTrigger;
  @ViewChild('inputTo', {read: MatAutocompleteTrigger}) autoCompleteInputTo: MatAutocompleteTrigger;
  myControl = new FormControl();
  myControlTo = new FormControl();
  options: string[] = ['Hồ Chí Minh (SNG)', 'Hà Nội (HN)', 'Đà Nẵng (DN)'];
  filteredOptions: Observable<string[]>;
  filteredOptionsTo: Observable<string[]>;
  fromValue: string = '';
  toValue: string = '';

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
    this.fromValue = this.options[0];
    this.toValue = this.options[1];
    this.myControl.setValue(this.fromValue);
    this.myControlTo.setValue(this.toValue);
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => {
        if ( value !== '' ) {
          this.fromValue = value;
        }
        return this._filter(value)
      })
    );
    this.filteredOptionsTo = this.myControlTo.valueChanges
    .pipe(
      startWith(''),
      map(value => {
        if ( value !== '' ) {
          this.toValue = value;
          // this.renderer.selectRootElement('#inputFrom').focus();
        }
        return this._filter(value)
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
    if( pickedDate < now ) {
      return false;
    } else {
      return true;
    }
  }

  clearInputTo(myControlTo: FormControl){
    myControlTo.setValue('');
    this.autoCompleteInputTo.openPanel();
  }
  clearInputFrom(myControl: FormControl){
    myControl.setValue('');
    this.autoCompleteInputFrom.openPanel();
  }
}
