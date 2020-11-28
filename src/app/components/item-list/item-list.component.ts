import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @ViewChild('dataTable') table: ElementRef | undefined;
  dataTable: any;

  @Input() itemList: Array<Item> = [];

  constructor() { }

  ngOnInit(): void {
    this.dataTable = this.table?.nativeElement;
    this.dataTable.DataTable();
  }

}
