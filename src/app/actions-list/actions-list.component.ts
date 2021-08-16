import { Component, OnInit } from '@angular/core';
import {_ACTIONS} from '../mock-data/mock-actions';
import {MatDialog} from '@angular/material/dialog';
import {ApplyDialogComponent} from '../dialogs/apply-dialog/apply-dialog.component';
import {Subject, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.scss']
})
export class ActionsListComponent implements OnInit {

  actions = _ACTIONS.filter(action => action.id !== 4);

  private searchTerms = new Subject<string>();

  constructor(private dialog: MatDialog) { }

  openDialog(id): void {
    const dialogRef = this.dialog.open(ApplyDialogComponent, {
      width: '800px',
      height: '350px',
      data: {
        id,
        message: 'Напиши ни на кратко зошто би сакал/а да аплицираш тука:'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.actions.find(action => action.id === result).id = undefined;
      }
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string = '') => {
        if (term.length === 0) { return of(_ACTIONS); }
        return of(_ACTIONS.filter(action => (action.header.toLowerCase().includes(term.toLowerCase()))
          || action.summary.toLowerCase().includes(term.toLowerCase())
          || action.organizer.toLowerCase().includes(term.toLowerCase())
          || action.location.toLowerCase().includes(term.toLowerCase())
          || action.date.toString().toLowerCase().includes(term.toLowerCase())
          || action.time.toLowerCase().includes(term.toLowerCase())
          ));
      }),
    ).subscribe(data => {
      this.actions = data;
    });
  }
}
