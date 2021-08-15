import { Component } from '@angular/core';
import {_ACTIONS} from '../mock-data/mock-actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss']
})
export class FeaturedListComponent {

  constructor(private route: Router) { }

  actions = _ACTIONS;
  showMoreText = 'Прикажи повеќе';
  clicked = false;

  showMore(): void {
    this.clicked = true;
    this.showMoreText = 'Нема повеќе постови';
  }

}
