import { Component, OnInit } from '@angular/core';
import {_NEWSLETTERS} from '../mock-data/mock-newsletters';
import {ActivatedRoute} from '@angular/router';
import {Newsletter} from '../interface/newsletter.interface';

@Component({
  selector: 'app-newsletter-item',
  templateUrl: './newsletter-item.component.html',
  styleUrls: ['./newsletter-item.component.scss']
})
export class NewsletterItemComponent implements OnInit {

  newsletters = _NEWSLETTERS;
  newsletter: Newsletter;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(it => this.newsletter = this.newsletters.find(f => f.id === +it.id));

  }

}
