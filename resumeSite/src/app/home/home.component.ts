import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `<div id="videodiv">
  <video controls>
      <source src="assets/content/EditReel.mp4" type="video/mp4">
  </video>
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
              <li>* problem solving, coordination, leadership, and team collaboration. </li>
              <li>* Java, Python, C, SQL & Front-End Web Design</li>
              <li>* Adobe Photoshop, Audition, Premiere, & After Effects</li>
              <li>* Davinci Resolve & RX6</li>
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
                  <li>BS Information Technology from University of Missouri</li>
                  <li>TA for Multiple Media Design courses at Mizzou</li>
                  <li>2nd Assistant Director for a developing TV pilot</li>
                  <li>Team Memeber and Head Trainer at Target</li>
              </ul>
          <button><a routerLink="/about">More About Me</a></button>
          </div>
      </mat-card-content>
  </mat-card>
</div>
`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
