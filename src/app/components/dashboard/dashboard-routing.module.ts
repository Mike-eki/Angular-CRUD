import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CreatePersonComponent } from './people/create-person/create-person.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    // { path: '', component: PeopleComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'create-person', component: CreatePersonComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
