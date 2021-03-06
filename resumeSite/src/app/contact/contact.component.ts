import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `<h3>Contact Form</h3>

  <div class="container">
    <form action="mailto:mcmurrayhenry@gmail.com" method="post" enctype="text/plain">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name..">
  
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name..">
  
      <label for="eMail">Email</label>
      <input type="text" id="eMail" name="email" placeholder="Your email..">
  
      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
  
      <input type="submit" value="Submit">
    </form>
  </div>`,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}
