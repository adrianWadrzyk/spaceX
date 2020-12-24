import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { PhotoResponseService } from '../services/photo-response.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private HttpService: HttpService, 
              private searchService: PhotoResponseService, 
              private router: Router ) { }

  ngOnInit(): void {
  }

  param:string = '';

  getImage() { 
   this.HttpService.getImage(this.param).subscribe(image => {
   this.searchService.response = image['collection'].items
   this.searchService.status = 1;
   this.router.navigateByUrl("gallery");
   })
  }
}
