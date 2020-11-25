import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-item-list-interface',
  templateUrl: './item-list-interface.component.html',
  styleUrls: ['./item-list-interface.component.scss']
})
export class ItemListInterfaceComponent implements OnInit {

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getItemList().subscribe(res => {
      console.log(res);
    })
  }

}
