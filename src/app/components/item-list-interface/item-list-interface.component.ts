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
  itemGroup: number | undefined;
  msg: string | undefined;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    //retreive item list via API
    this.http.getItemList().subscribe(
      res => {
        this.itemList = res.filter(item => item.name );
      },
      err => {
        this.msg = "An error occurred while retreiving data.";
      }
    )
  }

}
