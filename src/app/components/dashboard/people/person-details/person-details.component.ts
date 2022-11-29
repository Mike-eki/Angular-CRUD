import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { People } from 'src/app/interfaces/people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  id : number
  person$! : Observable<People>
  // loading : boolean = false

  constructor(private _servicePeople : PeopleService, private aRoute : ActivatedRoute) { 
    this.id = +this.aRoute.snapshot.paramMap.get('id')!
  }

  ngOnInit(): void {
    this.person$ = this._servicePeople.getPerson(this.id)
  }

}
