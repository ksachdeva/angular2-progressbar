declare var require;
const ProgressBar = require('progressbar.js');

import {Component, Input, ElementRef} from '@angular/core';
import {BaseShapeComponent} from './shape';
import {ShapeOptions} from './progressbar';

@Component({
  selector: 'ks-semi-circle-progress',
  template: `
  <ng-content></ng-content>
`
})
export class SemiCircleProgressComponent extends BaseShapeComponent {
  @Input() options: ShapeOptions;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngOnInit() {
    super.setShape(new ProgressBar.SemiCircle(this.elementRef.nativeElement, this.options));
    super.animate(0.0);
  }
}
