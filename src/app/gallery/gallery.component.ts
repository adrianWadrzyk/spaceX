import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoResponseService } from '../services/photo-response.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private searchServie: PhotoResponseService, 
              private router: Router) { }

  response = this.searchServie.response;

  ngOnInit(): void {
    console.log(this.searchServie.response);

    if(this.response.length < 1) 
        this.router.navigateByUrl("");
  }
}
