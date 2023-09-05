import { Component, OnInit } from '@angular/core';
import { CsItem } from '../customerServices.interface';
import { CustomerServicesService } from '../customer-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-service-details-page',
  templateUrl: './customer-service-details-page.component.html',
  styleUrls: ['./customer-service-details-page.component.scss']
})
export class CustomerServiceDetailsPageComponent implements OnInit {
  item: CsItem;
  constructor(
    private csService: CustomerServicesService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.item = this.csService.getCsById(id);
  }

}
