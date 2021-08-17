import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-action',
  templateUrl: './create-action.component.html',
  styleUrls: ['./create-action.component.scss']
})
export class CreateActionComponent {

  form = this._formDefinition;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  onSubmit(): void {
    this.router.navigate(['home']);
  }

  get _formDefinition(): FormGroup {
    return this.formBuilder.group({
      header: ['', Validators.required],
      summary: ['', Validators.required],
      text: ['', Validators.required],
      points: ['', Validators.required],
      time: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      organizer: ['', Validators.required],
    });
}


}
