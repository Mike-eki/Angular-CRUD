import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { People } from 'src/app/interfaces/people';
import { PeopleService } from 'src/app/services/people.service';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  form : FormGroup

  constructor(private fb : FormBuilder, private _userService : PeopleService, private router : Router, private _message: ShowMessageService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  addPerson() {
    const person : People = {
      name: this.form.value.name,
      phoneNumber: this.form.value.phoneNumber,
      emailAddress: this.form.value.emailAddress
    }

    this._userService.addPerson(person).subscribe(data => {
      this._message.showAMessage('The contact was created')
      this.router.navigate(['/dashboard/people'])
    }
    )


  }

}
