
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[showIfScroll]'
})
export class ShowIfScrollDirective implements OnInit {
  @Input() scrollLimit: number = 20;

  constructor(@Inject(DOCUMENT) private document: Document,
              private element: ElementRef) {
  }

  ngOnInit() {
    this.calcElementDisplay();
  }

  private calcElementDisplay() {
    let showElement =
      this.document.body.scrollTop > this.scrollLimit
      || this.document.documentElement.scrollTop > this.scrollLimit;
    this.element.nativeElement.style.display = showElement ? 'block' : 'none';
  }

  @HostListener('window:scroll')
  onGlobalScroll() {
    this.calcElementDisplay();    
  }

  @HostListener('click')
  onButtonClick() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }  
}
