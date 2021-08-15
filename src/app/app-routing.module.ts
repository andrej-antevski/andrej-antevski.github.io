import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {NewsletterItemComponent} from './newsletter-item/newsletter-item.component';
import {ActionsListComponent} from './actions-list/actions-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'newsletter/:id',
    component: NewsletterItemComponent
  },
  {
    path: 'actions',
    component: ActionsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
