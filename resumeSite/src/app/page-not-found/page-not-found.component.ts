import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<div id="rocket">
  <img src="assets/404Error.gif">
</div>
<div id="info">
  <h1>Oops</h1>
  <h1>It looks like we couldn't find the page you were looking for</h1>
</div>`,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
