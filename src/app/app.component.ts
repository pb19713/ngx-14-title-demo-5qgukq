import { ScrollDispatcher } from '@angular/cdk/overlay';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private scrollDispatcher: ScrollDispatcher) {
    scrollDispatcher.scrolled().subscribe(console.log);
  }
}
