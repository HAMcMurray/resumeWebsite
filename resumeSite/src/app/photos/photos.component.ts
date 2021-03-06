import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-photos',
  template: ` <!--Photo Row 1-->
  <div id="container">
  <div class="rows">   
     <div class="gallery">
         <img src="assets/content/andy.jpg" alt="Andy" (click)="setActiveClass(1)">
     </div>
     <div class="gallery">
         <img src="assets/content/window.jpg" alt="Window" (click)="setActiveClass(2)">
     </div>
     <div class="gallery">
         <img src="assets/content/art.jpg" alt="Art" (click)="setActiveClass(3)">
     </div>
 </div>
 <!--Photo Row 2-->
 <div class="rows">
     <div class="gallery">
         <img src="assets/content/ashley.JPG" alt="Ashley" (click)="setActiveClass(4)">
     </div>
     <div class="gallery">
         <img src="assets/content/bag.jpg" alt="bag" (click)="setActiveClass(5)">
     </div>
     <div class="gallery">
         <img src="assets/content/bikes.jpg" alt="Bikes" (click)="setActiveClass(6)">
     </div>
 </div>
 <!--Photo Row 3-->
 <div class="rows">
     <div class="gallery">
         <img src="assets/content/boat.jpg" alt="Boat" (click)="setActiveClass(7)">
     </div>
     <div class="gallery">
         <img src="assets/content/city.jpg" alt="City" (click)="setActiveClass(8)">
     </div>
     <div class="gallery">
         <img src="assets/content/cathedral.jpg" alt="Cathedral" (click)="setActiveClass(9)">
     </div>
 </div>
 <!--Photo Row 4-->
 <div class="rows">
     <div class="gallery">
         <img src="assets/content/flags.jpg" alt="Flags" (click)="setActiveClass(10)">
     </div>
     <div class="gallery">
         <img src="assets/content/flux.jpg" alt="Flux" (click)="setActiveClass(11)">
     </div>
     <div class="gallery">
         <img src="assets/content/hall.jpg" alt="Hall" (click)="setActiveClass(12)">
     </div>
 </div>
 <!--Photo Row 5-->
 <div class="rows">
     <div class="gallery">
         <img src="assets/content/kyle.jpg" alt="Kyle" (click)="setActiveClass(13)">
     </div>
     <div class="gallery">
         <img src="assets/content/kyle2.jpg" alt="Kyle2" (click)="setActiveClass(14)">
     </div>
     <div class="gallery">
         <img src="assets/content/market.jpg" alt="Market" (click)="setActiveClass(15)">
     </div>
 </div>
 <!--Photo Row 6-->
 <div class="rows">
     <div class="gallery">
         <img src="assets/content/quad.jpg" alt="Quad" (click)="setActiveClass(16)">
     </div>
     <div class="gallery">
         <img src="assets/content/rainbow.jpg" alt="Rainbow" (click)="setActiveClass(17)">
     </div>
     <div class="gallery">
         <img src="assets/content/scope.jpg" alt="Scope" (click)="setActiveClass(18)">
     </div>
 </div>
 <!--Photo Row 7-->
 <div class="rows">
     <div class="gallery">
         <img src="assets/content/stairs.jpg" alt="Stairs" (click)="setActiveClass(19)">      
     </div>
     <div class="gallery galleryNeon">
         <img src="assets/content/neon.jpg" alt="Neon" (click)="setActiveClass(20)">       
     </div>
     <div class="gallery">
         <img src="assets/content/tyler.jpg"  alt="Tyler" (click)="setActiveClass(21)">
     </div>
 </div>
 <!--Photo Row 8-->
 <div class="rows">
     <div class="gallery gallery8">
         <img src="assets/content/danny.jpg" alt="Danny" (click)="setActiveClass(22)">      
     </div>
     <div class="gallery gallery8">
         <img src="assets/content/dogwood.jpg" alt="Dogwood" (click)="setActiveClass(23)">       
     </div>
     <div class="gallery gallery8">
         <img src="assets/content/ivy.jpg"  alt="Ivy" (click)="setActiveClass(24)">
     </div>
 </div>
 <!--Full Screen Photo Viewer-->
 <div id="lightbox" [ngClass]=statusClass (click)="setActiveClass2()"><p>please work</p></div>
 </div>`,
  styleUrls: ['./photos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  statusClass = 'not-active';

  setActiveClass(num){
    this.statusClass = 'active , active-'+num;
    
  }
  setActiveClass2(){
    this.statusClass = 'not-active';
  }

    
}
