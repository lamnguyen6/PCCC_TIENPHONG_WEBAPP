import { Component, OnInit } from '@angular/core';
import { HandbookService } from '../handbook.service';

@Component({
  selector: 'app-handbook-page',
  templateUrl: './handbook-page.component.html',
  styleUrls: ['./handbook-page.component.scss']
})
export class HandbookPageComponent implements OnInit {
  handbookList: Array<any> = [];
  constructor(
    private handbookService: HandbookService,
  ) { }

  ngOnInit(): void {
    const hbCardList = this.handbookService.searchCs('').map(item => this.handbookService._itemcard(item));
    this.handbookList = hbCardList.map(item => ({ id: item.id, name: item.name, routerLink: `/cam-nang-pccc/${item.id}`, thumbnailContent: item.thumbnailContent, thumbnailImage: item.thumbnailImage }));
  }
}
