import { ThrowStmt } from '@angular/compiler';
import { Component, DoCheck, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PhotoResponseService } from '../services/photo-response.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, DoCheck {
  constructor(private searchService: PhotoResponseService, 
              private router: Router) { }

  statusModal:boolean = false;
  imgDetail;
  response = [];  

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(this.response != this.searchService.response)
      this.response = this.searchService.response;

    if(this.response.length < 1) 
      this.router.navigateByUrl("");
  }

    showModal(index): void { 
      this.statusModal = true; 
      this.imgDetail = this.response[index];
    }

    closeModal($event): void { 
      this.statusModal = $event;
    }
}
