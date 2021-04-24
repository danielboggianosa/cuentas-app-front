import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public API_URI = "https://jsonplaceholder.typicode.com/";

  constructor() { }
}
