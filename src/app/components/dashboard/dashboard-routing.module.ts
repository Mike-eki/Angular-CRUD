import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CreatePersonComponent } from './people/create-person/create-person.component';
import { EditPersonComponent } from './people/edit-person/edit-person.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailsComponent } from './people/person-details/person-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'people', component: PeopleComponent },
    { path: 'create-person', component: CreatePersonComponent },
    { path: 'person-details/:id', component: PersonDetailsComponent},
    { path: 'edit-person/:id', component: EditPersonComponent}
    // { path: '**', component: PeopleComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
