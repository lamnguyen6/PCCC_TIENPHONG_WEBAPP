import { Component, OnInit } from '@angular/core';
import { CsCard } from '../customerServices.interface';
import { CustomerServicesService } from '../customer-services.service';

@Component({
  selector: 'app-customer-services-page',
  templateUrl: './customer-services-page.component.html',
  styleUrls: ['./customer-services-page.component.scss']
})
export class CustomerServicesPageComponent implements OnInit {
  csList: Array<CsCard> = [];
  constructor(
    private csService: CustomerServicesService,
  ) { }

  ngOnInit(): void {
    this.csList = this.csService.searchCs('').map(item => this.csService._itemcard(item));
  }

}
