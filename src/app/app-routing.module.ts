import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {NewsletterItemComponent} from './newsletter-item/newsletter-item.component';
import {ActionsListComponent} from './actions-list/actions-list.component';
import {ActionItemComponent} from './action-item/action-item.component';
import {MyActionsComponent} from './my-actions/my-actions.component';
import {CreateActionComponent} from './create-action/create-action.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
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
  },
  {
    path: 'action/:id',
    component: ActionItemComponent
  },
  {
    path: 'my-actions',
    component: MyActionsComponent
  },
  {
    path: 'create-action',
    component: CreateActionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
