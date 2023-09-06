import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HandbookService } from '../handbook.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-handbook-details-page',
  templateUrl: './handbook-details-page.component.html',
  styleUrls: ['./handbook-details-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HandbookDetailsPageComponent implements OnInit {
  item: any;
  constructor(
    private handbookService: HandbookService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.item = this.handbookService.getHanbookById(id);
  }

}
