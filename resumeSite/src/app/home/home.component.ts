import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `<div id="videodiv">
  <iframe src="https://www.youtube.com/embed/FrIwITzxBT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
  <mat-card class="card">
      <mat-card-content style="float:right;" class="content">
          <mat-card-content style="float:left;">
              <img class="images" src="assets/skills.jpg" alt="skills">
          </mat-card-content>
          <div id="info">
          <h1>Skills</h1>
          <ul>
              <li>Software Engineering</li>
              <li></li>
              <li>Web Design</li>
              <li></li>
              <li>Motion Graphics</li>
              <li></li>
              <li>Graphic Design</li>
              <li></li>
          </ul>
          <button><a routerLink="/videos">Videos</a></button><button><a routerLink="/photos">Photos</a></button>
          </div>
      </mat-card-content>
  </mat-card>
</div>
<div id="breaker"></div>
<div>
  <mat-card class="card">
      <mat-card-content style="float:right;" class="content">
          <mat-card-content style="float:left;">
              <img class="images" src="assets/exp.jpg" alt="skills">
          </mat-card-content>
          <div>
              <h1>Experience</h1>
              <ul>
                  <li>BS Information Technology</li>
                  <li></li>
                  <li>Sales Accociate</li>
                  <li></li>
                  <li>Teaching Assistant</li>
                  <li></li>
                  <li>Media Design Checkout</li>
                  <li></li>
                  <li>Interactive Digital Lab Assistant</li>
                  <li></li>
                  <li>2nd Assistant Director</li>
              </ul>
          <button><a routerLink="/about">More About Me</a></button>
          </div>
      </mat-card-content>
  </mat-card>
  <p></p>
</div>
`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
