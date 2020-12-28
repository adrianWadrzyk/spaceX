import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoResponseService {

  constructor(private HttpService: HttpService, 
              private router : Router) { }

  response = [];
  status = 0;

  getImage(param) { 
      this.HttpService.getImage(param).subscribe(image => {
      this.response = image['collection'].items
      this.status = 1;
      this.router.navigateByUrl("gallery");
      })
  }
}
