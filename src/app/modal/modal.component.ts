import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }
  
  @Input()
  imgDetail; 

  @Output() 
  close = new EventEmitter();

  ngOnInit(): void {
    console.log(this.imgDetail);
  }

  closeModal() { 
    this.close.emit("false");
  }

}
