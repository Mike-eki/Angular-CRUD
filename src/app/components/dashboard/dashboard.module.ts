import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleComponent } from './people/people.component';
import { CreatePersonComponent } from './people/create-person/create-person.component';
import { PersonDetailsComponent } from './people/person-details/person-details.component';
import { EditPersonComponent } from './people/edit-person/edit-person.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    PeopleComponent,
    CreatePersonComponent,
    PersonDetailsComponent,
    EditPersonComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
