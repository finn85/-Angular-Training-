import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  public spinner = {
    block: document.createElement('div'),
    spinner: document.createElement('spinner'),

    start(){
      // this.block.style.position = 'fixed';
      // this.block.style.background = 'rgba(215, 215, 215, .55)';
      // this.block.style.height = '100vh';
      // this.block.style.width = '100vw';
      // this.block.style.color = 'black';
      // this.block.style.fontSize = '2rem';
      // this.block.style.textAlign = 'center';
      // this.block.style.lineHeight = '100vh';
      // this.block.innerHTML = 'Loading<br>';
      // setInterval(() => {
      //   this.block.innerHTML += '.'
      // }, 500);
      // document.body.appendChild(this.block);
      document.body.appendChild(this.spinner);
    },
    stop(){
      document.body.removeChild(this.spinner);
    }
  };
  constructor() { }
}
