import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// This is a simple service to retreive messages to be displayed.
export class MessageService {

  constructor() { }

  errorMessage() {
    return "An unexpected error occurred while retreiving data.";
  }
}
