import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private builder: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.myForm = this.builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
  }

  login() {
    this.snackBar.open('You are been logged in!', 'Close', {
      duration: 5000
    })
  }

}
