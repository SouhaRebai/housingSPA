import { Component, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  public properties: Array<any> = [
    {
      "id": 1,
      "image": "estern_building.jpg",
      "name": "Ester Columbia Building",
      "type": "House",
      "price": 1350000
    },
    {
      "id": 2,
      "image": "birla_house.jpg",
      "name": "Birla House",
      "type": "House",
      "price": 80000
    },
    {
      "id": 3,
      "image": "rose_villa.jpg",
      "name": "Rose Valley Villa",
      "type": "Summer House",
      "price": 150000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
