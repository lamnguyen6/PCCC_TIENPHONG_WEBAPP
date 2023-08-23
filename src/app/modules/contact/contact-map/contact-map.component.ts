import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss']
})
export class ContactMapComponent implements OnInit {
  lat = 21.84020299520504;
  lng = 105.2100494202877;
  constructor() { }

  ngOnInit(): void {
  }

}
