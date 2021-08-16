import { Component } from '@angular/core';
import {_ACTIONS} from '../mock-data/mock-actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-actions',
  templateUrl: './my-actions.component.html',
  styleUrls: ['./my-actions.component.scss']
})
export class MyActionsComponent {

  pending = _ACTIONS.filter(action => [1, 2].includes(action.id));
  accepted = _ACTIONS.filter(action => [3].includes(action.id));
  done = _ACTIONS.filter(action => [4].includes(action.id));
  constructor(private router: Router) { }


  openAction(id): void{
    this.router.navigate(['action', id]);
  }
}
