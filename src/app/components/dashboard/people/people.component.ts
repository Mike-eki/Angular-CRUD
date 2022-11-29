import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { People } from 'src/app/interfaces/people';
import { PeopleService } from 'src/app/services/people.service';
import { ShowMessageService } from 'src/app/services/show-message.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})


export class PeopleComponent implements OnInit {
  
  listPeople : People[] = []

  loading : boolean = false

  displayedColumns: string[] = ['fullName', 'phoneNumber', 'emailAddress', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _peopleService : PeopleService, private _message: ShowMessageService) { }
  
  ngOnInit(): void {
    this.loadPeople()
  }
  
  loadPeople() {
    this.loading = true

    this._peopleService.getPeople().subscribe(data => {
      this.loading = false
      this.listPeople = data
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePerson(id : number) {
    this.loading = true

    this._peopleService.deletePerson(id).subscribe(() => {
      this.loadPeople()
      this.loading = false
      this._message.showAMessage('Contact removed succesfully')
    })
  }


}
