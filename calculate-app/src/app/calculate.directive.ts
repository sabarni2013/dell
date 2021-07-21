import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCalculate]'
})
export class CalculateDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }

}
