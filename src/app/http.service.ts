import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getImage(param) { 
    return this.http.get(`https://images-api.nasa.gov/search?q=${param}&media_type=image`)
  }
}
