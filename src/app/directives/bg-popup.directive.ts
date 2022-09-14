import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[bgBgPopup]'
})
export class BgPopupDirective implements OnInit {

  @HostBinding('class.open') open = false;

  @HostListener('click') mouseclick() {
    this.open = !this.open;
  }

  constructor() {
  }

  ngOnInit(): void {

  }

}
