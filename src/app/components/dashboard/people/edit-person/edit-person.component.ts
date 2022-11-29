import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from 'src/app/interfaces/people';
import { PeopleService } from 'src/app/services/people.service';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  loading : boolean = false
  form : FormGroup
  id : number

  constructor(private fb : FormBuilder, private _peopleService : PeopleService, private router : Router, private _message : ShowMessageService, private aRoute : ActivatedRoute) {
    this.form = fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required ]
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!
   }

  ngOnInit(): void {
    if(this.id != 0) {
      this.getPerson(this.id)
    }
  }

  getPerson(id : number) {
    this.loading = true
    this._peopleService.getPerson(id).subscribe(data => {
      this.form.setValue({
        name: data.name,
        phoneNumber: data.phoneNumber,
        emailAddress: data.emailAddress
      })
      this.loading = false
    })
  }

  editContact() {

    this.loading = true
    const person : People = {
      id: this.id,
      name: this.form.value.name,
      phoneNumber: this.form.value.phoneNumber,
      emailAddress: this.form.value.emailAddress
    }

    this._peopleService.updatePerson(this.id ,person).subscribe( () => {
      this.loading = false
      this.router.navigate(['/dashboard/people'])
      this._message.showAMessage('Contact updated succesfully')
    })
  }
  

}
