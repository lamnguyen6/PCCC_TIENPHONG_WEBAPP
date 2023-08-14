import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private helper: HelperService,
  ) { }

  ngOnInit(): void {
  }
  copyBankNumber(text: string) {
    this.helper.copyToClipBoard(text);
  }
}
