import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginDialogComponent } from '../dialogs/login/login-dialog.component';
import { SignupComponent } from '../dialogs/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow = false;
  ngOnInit() {}

  constructor(public dialog: MatDialog) {}

   openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '90%',
      data: {name: 'abc'}
    });

    const dialogRefSignup = this.dialog.open(SignupComponent, {
      width: '90%',
      data: {name: 'abc'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    dialogRefSignup.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}
toggleNav() {
  this.isShow = !this.isShow;
}
}
