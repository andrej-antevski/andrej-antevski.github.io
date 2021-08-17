import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-points-dialog',
  templateUrl: './points-dialog.component.html',
  styleUrls: ['./points-dialog.component.scss']
})
export class PointsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PointsDialogComponent>) { }

  ngOnInit(): void {
  }

}

