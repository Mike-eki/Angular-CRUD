import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  form : FormGroup

  constructor(private fb : FormBuilder, private _userService : PeopleService, private router : Router, private _snackBar: MatSnackBar) {
    this.form = fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddres: ['', Validators.required ]
    })
   }

  ngOnInit(): void {
  }
  

}
