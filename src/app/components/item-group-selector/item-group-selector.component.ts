import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-group-selector',
  templateUrl: './item-group-selector.component.html',
  styleUrls: ['./item-group-selector.component.scss']
})
export class ItemGroupSelectorComponent implements OnInit {

  @Input() itemGroups: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
