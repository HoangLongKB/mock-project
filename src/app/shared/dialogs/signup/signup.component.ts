import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login/login-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SignupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog) { }

  ngOnInit() {
  }
  closeSelfDialog() {
    this.dialogRef.close();
  }
  openDialog(): void {
    this.closeSelfDialog();
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '90%',
      data: {name: 'abc'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}
}
