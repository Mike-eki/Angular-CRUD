import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People } from '../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private APP_URL : string = environment.endpoint
  private API_URL : string = 'api/Persons/'

  // listPeople: People[] = [
  //   {id: 10, fullName: 'Alberto Perez', phoneNumber: '32156463', emailAddress: 'dummy@email.com'},
  //   {id: 2, fullName: 'Sofia Ruiz', phoneNumber: '32112363', emailAddress: 'my@email.com'},
  //   {id: 3, fullName: 'Suertudo Envals', phoneNumber: '321346463', emailAddress: 'your@email.com'},
  //   {id: 4, fullName: 'Frisk Maguin', phoneNumber: '32984763', emailAddress: 'solo@her.com'},
  //   {id: 5, fullName: 'Maria Leon', phoneNumber: '36156463', emailAddress: 'mari@email.com'},
  //   {id: 6, fullName: 'Noelle Arquimedes', phoneNumber: '39756463', emailAddress: 'favonius@email.com'},
  //  ];

  constructor(private http : HttpClient) { }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(`${this.APP_URL}${this.API_URL}`)
  }

  getPerson(id: number) : Observable<People> {
     return this.http.get<People>(`${this.APP_URL}${this.API_URL}${id}`)
  }

  addPerson(person : People) : Observable<People> {
    return this.http.post<People>(`${this.APP_URL}${this.API_URL}`, person)
  }

  deletePerson(id : number) : Observable<void> {
    return this.http.delete<void>(`${this.APP_URL}${this.API_URL}${id}`)
  }

  updatePerson(id: number, person : People) : Observable<void> {
    return this.http.put<void>(`${this.APP_URL}${this.API_URL}${id}`, person)
  }
}
