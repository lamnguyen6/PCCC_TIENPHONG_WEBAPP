import { Component, OnInit } from '@angular/core';
import { CustomerServicesService } from '../customer-services.service';
import { CardItem } from '../../share/components/card/card.interface';

@Component({
  selector: 'app-customer-services-page',
  templateUrl: './customer-services-page.component.html',
  styleUrls: ['./customer-services-page.component.scss']
})
export class CustomerServicesPageComponent implements OnInit {
  csList: Array<any> = [];
  constructor(
    private csService: CustomerServicesService,
  ) { }

  ngOnInit(): void {
    const csCardList = this.csService.searchCs('').map(item => this.csService._itemcard(item));
    this.csList = csCardList.map(item => ({ id: item.id, name: item.name, routerLink: `/dich-vu/${item.id}`, thumbnailContent: item.thumbnailContent, thumbnailImage: item.thumbnailImage }));
  }

}
