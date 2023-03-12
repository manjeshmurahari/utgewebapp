import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGallary]'
})
export class GallaryDirective {

  constructor(private e1:ElementRef) { }

  @HostListener('click')
  imageChange()
  {
    console.log(this.e1.nativeElement.src)
    var src:any=this.e1.nativeElement.src;
    var prev:any=document.getElementById("preview");
    var imageSlide=document.getElementsByClassName("img-slide");
    for(let i=0;i<imageSlide.length;i++)
    {
      imageSlide[i].classList.remove("active"); 
    }
    prev.src=src;
    this.e1.nativeElement.parentElement.classList.add("active");
  }
}
