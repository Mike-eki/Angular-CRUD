import { Injectable } from '@angular/core';
import { People } from '../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  listPeople: People[] = [
    {id: 10, fullName: 'Alberto Perez', phoneNumber: '32156463', emailAddress: 'dummy@email.com'},
    {id: 2, fullName: 'Sofia Ruiz', phoneNumber: '32112363', emailAddress: 'my@email.com'},
    {id: 3, fullName: 'Suertudo Envals', phoneNumber: '321346463', emailAddress: 'your@email.com'},
    {id: 4, fullName: 'Frisk Maguin', phoneNumber: '32984763', emailAddress: 'solo@her.com'},
    {id: 5, fullName: 'Maria Leon', phoneNumber: '36156463', emailAddress: 'mari@email.com'},
    {id: 6, fullName: 'Noelle Arquimedes', phoneNumber: '39756463', emailAddress: 'favonius@email.com'},
   ];

  constructor() { }

  getPeople() {
    return this.listPeople.slice();
  }

  addPerson(person : People) {
    this.listPeople.unshift(person)
  }

  deletePerson(id : number) {
    this.listPeople = this.listPeople.filter(element => element.id !== id)
  }
}
