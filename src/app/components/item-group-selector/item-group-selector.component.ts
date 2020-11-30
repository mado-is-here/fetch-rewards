import { Component, Input, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-item-group-selector',
  templateUrl: './item-group-selector.component.html',
  styleUrls: ['./item-group-selector.component.scss']
})
// This component is responsible for allowing the user to select and set the listId
// listId will be used to filter the data-table
export class ItemGroupSelectorComponent implements OnInit {

  @Input() listIdArray: number[];
  selectedListId: string = "Filter";

  constructor(private appDataService: AppDataService) { }

  ngOnInit(): void {
  }

  // click handler function, sets the listId to be persisitent throughout our app.
  onClick(listId: number): void {
    this.appDataService.setSelectedListId(listId);
    if (listId === -1) {
      this.selectedListId = "(All)"
    }
    else {
      this.selectedListId = "" + listId;
    }
  }

}
