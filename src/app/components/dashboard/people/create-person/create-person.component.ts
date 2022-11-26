import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { People } from 'src/app/interfaces/people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  form : FormGroup

  constructor(private fb : FormBuilder, private _userService : PeopleService, private router : Router, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  addPerson() {
    const person : People = {
      id: Math.random() * 300 - 1,
      fullName: this.form.value.fullName,
      phoneNumber: this.form.value.phoneNumber,
      emailAddress: this.form.value.emailAddress
    }

    this._userService.addPerson(person)

    this.router.navigate(['/dashboard/people'])

    this._snackBar.open('The contact was created', '', {
      duration: 1700,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
