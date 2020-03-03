import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-cards',
  templateUrl: './list-of-cards.component.html',
  styleUrls: ['./list-of-cards.component.css']
})
export class ListOfCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log(this.cribs)
  }


  cribs = [
    {
      "Name": "Agbabiaka",
      "Occupation": "Politician",
      "type": "Rent",
      "price": 55600,
      "address": "Plot 19, oniru Estate",
      "image": "1",
      "bedroom": "4 bed",
      "description": "tiyiuyiuyuyiuyiuyiuyiuyiuyiuhubh"
    },
    {
      "Name": "Agbabiaka",
      "Occupation": "Politician",
      "type": "Rent",
      "price": 55600,
      "address": "Plot 19, oniru Estate",
      "image": "1",
      "bedroom": "4 bed",
      "description": "tiyiuyiuyuyiuyiuyiuyiuyiuyiuhubh"
    },
    {
      "Name": "Agbabiaka",
      "Occupation": "Politician",
      "type": "Rent",
      "price": 55600,
      "address": "Plot 19, oniru Estate",
      "image": "1",
      "bedroom": "4 bed",
      "description": "tiyiuyiuyuyiuyiuyiuyiuyiuyiuhubh"
    },
    {
      "Name": "Agbabiaka",
      "Occupation": "Politician",
      "type": "Rent",
      "price": 55600,
      "address": "Plot 19, oniru Estate",
      "image": "1",
      "bedroom": "4 bed",
      "description": "tiyiuyiuyuyiuyiuyiuyiuyiuyiuhubh"
    },
    {
      "Name": "Agbabiaka",
      "Occupation": "Politician",
      "type": "Rent",
      "price": 55600,
      "address": "Plot 19, oniru Estate",
      "image": "1",
      "bedroom": "4 bed",
      "description": "tiyiuyiuyuyiuyiuyiuyiuyiuyiuhubh"
    },
    {
      "Name": "Agbabiaka",
      "Occupation": "Politician",
      "type": "Rent",
      "price": 55600,
      "address": "Plot 19, oniru Estate",
      "image": "1",
      "bedroom": "4 bed",
      "description": "tiyiuyiuyuyiuyiuyiuyiuyiuyiuhubh"
    },
  ]

}
