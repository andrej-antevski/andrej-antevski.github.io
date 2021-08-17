import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PointsDialogComponent} from '../dialogs/points-dialog/points-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router,
              private dialog: MatDialog) { }


  navigate(where): void {
    this.router.navigate([where]);
  }

  openDialog(): void{
    this.dialog.open(PointsDialogComponent);
  }
}
