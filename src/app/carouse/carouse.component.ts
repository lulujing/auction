import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouse',
  templateUrl: './carouse.component.html',
  styleUrls: ['./carouse.component.css']
})
export class CarouseComponent implements OnInit {

  private  imgUrl= 'http://via.placeholder.com/800x300';
  constructor() { }

  ngOnInit() {
  }

}
