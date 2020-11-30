import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Item } from 'src/app/models/Item';
import { AppDataService } from 'src/app/services/app-data.service';
import { HttpService } from 'src/app/services/http.service';
import { DataTableDataSource } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Item>;
  @Input() itemList: Item[];
  @Input() selectedListId: number;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'listId', 'name'];

  constructor() { }

  ngOnInit() {
    // takes the itemList as passed by parent and uses it as the data source to generate the data table.
    this.dataSource = new DataTableDataSource(this.itemList);
  }

  ngAfterViewInit() {
    // make sure data source and view matches.
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


}
