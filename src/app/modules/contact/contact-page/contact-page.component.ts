import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myForm: any;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  get f() {
		return this.form.controls;
	}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
		this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      phone: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern('^([0-9])+$')
      ]],
      email: ['', [Validators.required, Validators.email]],
      note: '',
    });
	}
  clearForm(): void {
		this.form.reset({
			name: '',
			phone: '',
			email: '',
			note: '',
		});
	}
}
