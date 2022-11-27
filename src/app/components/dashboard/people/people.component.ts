import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { People } from 'src/app/interfaces/people';
import { PeopleService } from 'src/app/services/people.service';


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
  
  constructor(private _peopleService : PeopleService, private _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.loadPeople()
  }
  
  loadPeople() {
    this.listPeople = this._peopleService.getPeople();
    this.dataSource = new MatTableDataSource(this.listPeople)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePerson(element : People) {
    this.loading = true
    
    setTimeout(() => {
      this._peopleService.deletePerson(element.id)
      this.loadPeople()
      this.loading = false
      this._snackBar.open('The contact was removed', '', {
        duration: 1700,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }, 3000)
  }


}
