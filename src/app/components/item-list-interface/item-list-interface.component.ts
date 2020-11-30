import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { AppDataService } from 'src/app/services/app-data.service';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-item-list-interface',
  templateUrl: './item-list-interface.component.html',
  styleUrls: ['./item-list-interface.component.scss']
})
export class ItemListInterfaceComponent implements OnInit {

  itemList: Item[]; // raw list retreived from server
  filteredItemList: Item[]; // filtered version of itemList based on listId group selection
  listIdArray: number[]; // list of unique listId values
  selectedListId: number; // current listId group as selected by user
  msg: string; // message to be displayed such as errors, if any

  constructor(
    private http: HttpService, 
    private appDataService: AppDataService,
    private msgService: MessageService){}

  ngOnInit(): void {
    //retreive item list via Fetch-Rewards API
    this.http.getItemList().subscribe(
      res => {
        this.itemList = res.filter(item => item.name ) // Set itemList
          .sort(this.sortItemList);
        this.listIdArray = this.itemList // get all unique listId values from itemList to store in listIdArray
          .map(item => item.listId)
          .filter((item, index, self) => { return self.indexOf(item) === index;} )
        if (this.selectedListId) { // filter itemList  if selectedListId contains a value
          this.filteredItemList = this.filterItemList(this.itemList, this.selectedListId);
        }
      },
      err => { // if error, set error message to be displayed below the header
        this.msg = this.msgService.errorMessage();
      }
    )
    // retreive current selected listId group, if none has been selected by user this will be -1 (All) by default
    this.appDataService.getSelectedListId().subscribe(
      listId => {
        this.selectedListId = listId;
        if (this.itemList) { // filter itemList  if itemList contains a value
          this.filteredItemList = this.filterItemList(this.itemList, this.selectedListId);
        }
      },
      err => { // if error, set error message to be displayed below the header
        this.msg = this.msgService.errorMessage();
      }
    )
  }

  // Simple filter function to filter itemList (-1 is 'All')
  filterItemList(itemList: Item[], listId: number): Item[] {
    return itemList.filter(item => {
      if (listId === -1) {
        return true;
      }
      else {
        return item.listId === listId; 
      }
    });
  }

  // Simple filter function to sort itemList by listId, then name
  sortItemList(a: Item, b: Item): number {
    //sort by listId first
    if (a.listId < b.listId) { return -1; }
    if (a.listId > b.listId) { return 1; }
    if (a.listId === b.listId) {
      //if listId is same, sort by name
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      if (a.name === b.name) { //if name is same, no sort
        return 0;
      }
    }
    return 0;
  }

}
