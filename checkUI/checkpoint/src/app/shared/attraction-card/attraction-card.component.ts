import { Component, OnInit, Input } from '@angular/core';
import { Attraction } from '../models/attraction.model';

@Component({
  selector: 'app-attraction-card',
  templateUrl: './attraction-card.component.html',
  styleUrls: ['./attraction-card.component.scss']
})
export class AttractionCardComponent implements OnInit {

  @Input() public attraction: Attraction;

  constructor() { }

  ngOnInit() {
  }

}
