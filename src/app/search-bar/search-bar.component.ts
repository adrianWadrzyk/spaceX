import { Component, OnInit } from '@angular/core';
import { PhotoResponseService } from '../services/photo-response.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private searchService: PhotoResponseService ) { }

  ngOnInit(): void {
  }

  param:string = '';

  getImage() { 
    this.searchService.getImage(this.param);
   }
}

