import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  copyToClipBoard(text: string) {
    navigator.clipboard.writeText(text);
  }
}
