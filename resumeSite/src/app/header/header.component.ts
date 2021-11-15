import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  //templateUrl: './header.component.html',
  template: `
  <!--Nav Bar-->
  <div id="navbar" >
      <h2>Henry McMurray</h2>
      <nav class="links">
        <ul>
          <li><a class="navs" routerLink="photos">Photos</a></li>
          <li><a class="navs" routerLink="videos">Videos</a></li>
          <li><a class="navs" routerLink="about">About</a></li>
          <li><a class="navs" routerLink="home">Home</a></li>
        </ul>
      </nav>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
