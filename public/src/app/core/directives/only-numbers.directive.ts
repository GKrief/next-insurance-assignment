import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {
  @Input() shouldAllowOnlyNumbers: boolean;

  constructor() { }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent): void {
    if (this.shouldAllowOnlyNumbers && !(event.key >= '0' && event.key <= '9')) {
      event.preventDefault();
    }
  }
}
