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
      <p>My name is Henry McMurray. Im 24 years old and come from St.Louis. I love playing video games like Dark Souls and Fire Emblem, and watching animated shows. 
        During my time at Mizzou I worked as a Teaching assistant for the Audio/Video editing courses and the Media Labs and Equipment Checkout. I also spend alot of my time practicing Video Editing, Graphic 
        Design, and Coding. I am currently looking for a full time position in the St.Louis Area in Web Development, Software Engineering or anything related to Media<p>
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
  <a>Kohl's</a>
    <dt>October 2021-Current</dt>
    <dt>Sales Associate</dt>
      <dd>Delivers high levels of customer service through effective problem solving</dd>
      <dd>Complete transactions accurately and efficiently while engaging customers</dd>
      <dd></dd>
  <a>University of Missouri</a>
    <dt>August 2019-January 2021</dt>
    <dt>TA for IT1610 and IT3610<dt>
      <dd>Assisted Professors with lectures, lab work, and grading</dd>
      <dd>Instructed on project management, workflow, product delivery, and design fundamentals for media production and editing</dd>
    <dt>August 2020-January 2021</dt>
    <dt>PLA for IT Media Design checkout</dt>
      <dd>Supervised Information Technology Program???s Equipment Checkout Office</dd>
    <dt>August 2019-January 2021</dt>
    <dt>PLA for IT Interactive Digital Enviornments Lab</dt>
      <dd>Created and managed Video Production Lab for the use of Mizzou Staff and classes in the Information Technology Program</dd>
      <dd></dd>
  <a>Burnt Bridge Production</a>
    <dt>January 2020-May 2020</dt>
    <dt> 2nd Assistant Director<dt>
      <dd>Partnered with AD in the creation of daily schedules, organization of actors and extras, and communication between teams on set</dd>
      <dd>Spearheaded leadership and delegation of the production assistant unit</dd>
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
