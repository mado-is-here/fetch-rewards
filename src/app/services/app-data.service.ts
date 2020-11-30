import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// This is a simple service to hold the selectedListId throughout our application.
export class AppDataService {

  selectedListId: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  constructor() { }

  getSelectedListId() {
    return this.selectedListId.asObservable();
  }

  setSelectedListId(listId: number) {
    this.selectedListId.next(listId);
  }
}
