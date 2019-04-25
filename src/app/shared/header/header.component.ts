import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginDialogComponent } from '../dialogs/login/login-dialog.component';

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
      width: '70%',
      height: '70%',
      data: {name: 'abc'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}
toggleNav() {
  this.isShow = !this.isShow;
}
}
