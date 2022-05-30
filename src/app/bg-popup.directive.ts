import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[bgBgPopup]'
})
export class BgPopupDirective {
 @HostBinding('class.open') onStart = false;
  constructor( private elementRef: ElementRef<HTMLElement>) { }


  @HostListener('document:click' , ['$event']) popeUp($event){
    this.onStart = this.elementRef.nativeElement.contains($event.target) ? !this.onStart : false;

  }
}


