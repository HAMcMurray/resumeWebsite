import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  template: `<div id="videodiv">
  <iframe src="https://www.youtube.com/embed/FrIwITzxBT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div id="videodiv">
  <iframe src="https://www.youtube.com/embed/a7gV0_5tEao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div id="videodiv">
  <iframe src="https://www.youtube.com/embed/4mxRjoQp8ic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>`,
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
