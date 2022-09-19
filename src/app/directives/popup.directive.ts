import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective implements OnInit {


  @HostBinding('class.open') isOpen = false;

  constructor(){

  }
  ngOnInit() {
  }

  @HostListener('click') click(){
    this.isOpen = !this.isOpen;
  }


}

