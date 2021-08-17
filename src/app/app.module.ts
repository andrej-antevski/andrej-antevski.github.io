import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsletterListComponent } from './newsletter-list/newsletter-list.component';
import { FeaturedListComponent } from './featured-list/featured-list.component';
import { NewsletterItemComponent } from './newsletter-item/newsletter-item.component';
import { ActionsListComponent } from './actions-list/actions-list.component';
import { ApplyDialogComponent } from './dialogs/apply-dialog/apply-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ActionItemComponent } from './action-item/action-item.component';
import { ApplicantsDialogComponent } from './dialogs/applicants/applicants-dialog.component';
import { MyActionsComponent } from './my-actions/my-actions.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateActionComponent } from './create-action/create-action.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { PointsDialogComponent } from './dialogs/points-dialog/points-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    NewsletterListComponent,
    FeaturedListComponent,
    NewsletterItemComponent,
    ActionsListComponent,
    ApplyDialogComponent,
    ActionItemComponent,
    ApplicantsDialogComponent,
    MyActionsComponent,
    CreateActionComponent,
    PointsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,

  ],
  exports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ApplyDialogComponent, ApplicantsDialogComponent]
})
export class AppModule { }
