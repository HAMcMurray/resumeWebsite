import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  template: `<div id="videodiv">
  <video controls>
      <source src="assets/content/EditReel.mp4" type="video/mp4">
  </video>
</div>
<div id="videodiv">
  <video controls>
      <source src="assets/content/apple.mp4" type="video/mp4">
  </video>
</div>
<div id="videodiv">
  <video controls>
      <source src="assets/content/duffy.mp4" type="video/mp4">
  </video>
</div>`,
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
