import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  public spinner = {
    block: document.createElement('div'),

    start(){
      this.block.style.position = 'fixed';
      this.block.style.background = 'rgba(215, 215, 215, .55)';
      this.block.style.height = '100vh';
      this.block.style.width = '100vw';
      this.block.style.color = 'white';
      this.block.style.fontSize = '2rem';
      this.block.style.textAlign = 'center';
      this.block.style.lineHeight = '100vh';
      this.block.style.textShadow = '1px 1px 3px black';
      this.block.innerHTML = 'Loading. Please wait';
      document.body.appendChild(this.block);
    },
    stop(){
      document.body.removeChild(this.block);
    }
  };
  constructor() { }
}
