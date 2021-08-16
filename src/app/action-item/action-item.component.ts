import {Component, OnInit, ViewChild} from '@angular/core';
import { _ACTIONS } from '../mock-data/mock-actions';
import {Action} from '../interface/action.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ApplyDialogComponent} from '../dialogs/apply-dialog/apply-dialog.component';
import {ApplicantsDialogComponent} from '../dialogs/applicants/applicants-dialog.component';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.scss']
})
export class ActionItemComponent implements OnInit {

  actions = _ACTIONS;
  action: Action;
  messages: string[] = [];

  @ViewChild('inputElement') inputName;
  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(map => this.action = this.actions.find(ac => ac.id === +map.id));
  }

  openApplicants(): void {
    const dialogRef = this.dialog.open(ApplicantsDialogComponent, {
      width: '800px',
      height: '1000px',
      data: {
        current: this.action.applicants,
        applications: this.action.pending.filter(pending => !this.action.applicants.includes(pending.name))
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        if (result.includes('deny')) {
          this.action.pending = this.action.pending.filter(pending => pending.name !== result.substring(0, result.length - 4));
        }
        else {
          this.action.applicants = this.action.applicants.concat(result);
        }
      }
    });
  }
  openDialog(id): void {
    const dialogRef = this.dialog.open(ApplyDialogComponent, {
      width: '800px',
      height: '350px',
      data: {
        id,
        message: 'Напиши зошто сакаш да се откажеш од акцијата:'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.router.navigate(['home']);
      }
    });
  }

  onEnter(): void{
    this.messages = this.messages.concat(this.inputName.nativeElement.value);
    console.log(this.messages);
    this.inputName.nativeElement.value = '';
  }
}
