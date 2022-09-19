import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective implements OnInit {

  isOpenV = false;

  @HostBinding('class.open') isOpen = this.isOpenV;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2){

  }
  ngOnInit() {
  }

  @HostListener('click') click(){
    console.log(ElementRef);
    console.log(3);
    if (this.isOpenV) {
      console.log(1);
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    } else {
      console.log(2);
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }
    this.isOpenV = !this.isOpenV;
  }

}

