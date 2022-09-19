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
    console.log(1);
    if (this.isOpenV) {
      console.log(2);
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    } else {
      console.log(3);
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }
    this.isOpenV = !this.isOpenV;
  }


  @HostListener('document:click') documentClick(){
    console.log(4);
    if (!this.isOpenV) {
      console.log(5);
      console.log(5);
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }

  }

}

