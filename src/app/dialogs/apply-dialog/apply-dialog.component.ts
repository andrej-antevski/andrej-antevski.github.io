import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-apply-dialog',
  templateUrl: './apply-dialog.component.html',
  styleUrls: ['./apply-dialog.component.scss']
})
export class ApplyDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ApplyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  textarea = '';

  ngOnInit(): void {
  }

  confirm(): void {
    this.dialogRef.close(this.data.id);
  }


}


interface DialogData {
  id: number;
}
