import { Component, OnInit } from '@angular/core';
import { AttractionService } from '../services/attraction.service';
import { Attraction } from '../shared/models/attraction.model';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent implements OnInit {

  attractions: Attraction[] = [];
  constructor(private attractionService: AttractionService) { }

  ngOnInit() {
    this.attractionService.getAttractions().subscribe((attractions) => {
      this.attractions = attractions;
    });
  }

}
