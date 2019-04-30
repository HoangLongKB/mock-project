import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog) { }

  ngOnInit() {
  }
  closeSelfDialog() {
    this.dialogRef.close();
  }
  openSignupDialog(): void {
    this.closeSelfDialog();
    const dialogRefSignup = this.dialog.open(SignupComponent, {
      width: '90%',
      data: {name: 'abc'}
    });
    dialogRefSignup.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
