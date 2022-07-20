import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { LiveFormDialogComponent } from './live-form-dialog/live-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  addLive(): void {
    const dialogRef = this.dialog.open(LiveFormDialogComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

}
