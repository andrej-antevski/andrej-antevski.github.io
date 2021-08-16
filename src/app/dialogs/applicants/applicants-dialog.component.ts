import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Applicant} from '../../interface/action.interface';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants-dialog.component.html',
  styleUrls: ['./applicants-dialog.component.scss']
})
export class ApplicantsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ApplicantsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


  ngOnInit(): void {
  }

  confirm(name): void {
    this.dialogRef.close(name);
  }

  deny(name): void {
    this.dialogRef.close(name + 'deny');
  }
}

interface DialogData {
  current: string[];
  applications: Applicant[];
}
