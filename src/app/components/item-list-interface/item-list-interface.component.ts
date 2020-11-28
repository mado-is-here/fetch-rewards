import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-item-list-interface',
  templateUrl: './item-list-interface.component.html',
  styleUrls: ['./item-list-interface.component.scss']
})
export class ItemListInterfaceComponent implements OnInit {

  itemList: Array<Item> = [];
  itemGroups: Array<number> = [];
  msg: string = '';

  constructor(private http: HttpService){}

  ngOnInit(): void {
    //retreive item list via API
    this.http.getItemList().subscribe(
      res => {
        this.itemList = res.filter(item => item.name );
        this.itemGroups = this.itemList
          .map(item => item.listId )
          .filter((item, index, self) => self.indexOf(item) === index)
          .sort();
      },
      err => {
        this.msg = "An error occurred while retreiving data.";
      }
    )
  }

}
