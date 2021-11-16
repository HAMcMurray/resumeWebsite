import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<!--Parallax Image 1-->
  <div class="parallax1"></div>
      <h1 id="header1">-About Me-</h1>
  <div class="parallax1"></div>
  <!--Content Cards-->
  <div class="content">
    <div class="info">
      <p>My name is Henry McMurray. Im 23 years old and come from St.Louis. I love playing video games like Dark Souls and Fire Emblem, and watching animated shows. 
        During my time at Mizzou I worked as a Teaching assistant for the Audio/Video editing courses. I also spend alot of my time practicing Video Editing and Graphic 
        Design and would love to find a job in media.<p>
    </div>
  </div>
  <!--Parallax Image 2-->
  <div class="parallax2"></div>
      <h1>-Education-</h1>
  <div class="parallax2"></div>
  <!--Content Cards-->
  <div class="content">
    <div class="info"><p>I attended Mizzou for Information Technology with a focus in media development. I was involved in the IT Student organization, the Ireland Study Abroad program,
      and even got to work on a perfesional tv shoot in Kansas City. During my time there I completed all of the IT departments 
   media classes and was on the Engineering Deans list for my last two years. In addition I also graduated with Minors in Computer Science and Cyber Security.<p></div>
  </div>
  <!--Parallax Image 3-->
  <div class="parallax3"></div>
      <h1>-Experience-</h1>
  <div class="parallax3"></div>
  <!--Content Cards-->
  <div class="content">
  <div class="info"><dl>
  <dt>Kohl's</dt>
    <dd>October 2021-Current</dd>
    <dd>  -Sales Associate</dd>
  <dt>University of Missouri</dt>
    <dd>August 2019-January 2021</dd>
    <dd>  -TA for IT1610 and IT3610<dd>
    <dd>  -PLA for IT Media Design checkout</dd>
    <dd>August 2020-January 2021</dd>
    <dd>  -PLA for IT Interactive Digital Enviornments Lab</dd>
  <dt>Burnt Bridge Production</dt>
    <dd>January 2020-May 2020</dd>
    <dd>  -2nd Assistant Director<dd>
  <dt>Target</dt>
    <dd>October 2017-August 2019</dd>
    <dd>  -Electronics Team member<dd>
    <dd>  -General Merchandise Training Lead</dd>
  </dl>
</div>
  </div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
