import { Component, OnInit, Input } from '@angular/core';
import { Crib } from '../crib';

@Component({
  selector: 'app-crib-cards',
  templateUrl: './crib-cards.component.html',
  styleUrls: ['./crib-cards.component.css']
})
export class CribCardsComponent implements OnInit {

  @Input('crib') crib: Crib;

  constructor() { }

  ngOnInit() {
  }

}
