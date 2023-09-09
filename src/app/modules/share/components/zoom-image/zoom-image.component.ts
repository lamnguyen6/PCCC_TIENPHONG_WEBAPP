import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

interface DATA {
  img: string;
  title: string;
};

@Component({
  selector: 'app-zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ZoomImageComponent implements OnInit {
  @Input('datasrc') datasrc: DATA;
  constructor() { }

  ngOnInit(): void {
  }
  zoom(e:any) {
    var zoomer = e.currentTarget;
    let offsetX;
    let offsetY;
    let x;
    let y;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }
}
