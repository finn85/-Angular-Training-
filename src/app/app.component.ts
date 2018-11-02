import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:`./app.component.html`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  linksIsHide!: boolean;

    onActivate = (childComponent: any) => {
      this.linksIsHide = childComponent.linksIsHide
    }
}
