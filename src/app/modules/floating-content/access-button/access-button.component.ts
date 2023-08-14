import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

export interface Tooltip {
  content: string;
  pos: TooltipPosition;
  cls?: string;
}

@Component({
  selector: 'app-access-button',
  templateUrl: './access-button.component.html',
  styleUrls: ['./access-button.component.scss']
})
export class AccessButtonComponent implements OnInit {
  @Input('subContent') subContent: any;
  @Input('tooltip') tooltipContent: Tooltip = { content: '', pos: 'right', cls: 'custom-tooltip' };
  constructor() { }

  ngOnInit(): void {
    if (!this.tooltipContent['cls']) this.tooltipContent['cls'] = 'custom-tooltip';
  }
}
