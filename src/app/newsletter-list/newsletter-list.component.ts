import { Component } from '@angular/core';
import { _NEWSLETTERS } from '../mock-data/mock-newsletters';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newsletter-list',
  templateUrl: './newsletter-list.component.html',
  styleUrls: ['./newsletter-list.component.scss']
})
export class NewsletterListComponent {

  newsletters = _NEWSLETTERS;
  showMoreText = 'Прикажи повеќе';
  clicked = false;

  constructor(private route: Router) { }

  showMore(): void{
    this.clicked = true;
    this.showMoreText = 'Нема повеќе постови';
  }


  navigate(id): void{
    this.route.navigate([`newsletter/${id}`]);
  }
}
