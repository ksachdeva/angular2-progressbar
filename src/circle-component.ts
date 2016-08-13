declare var require;
const ProgressBar = require('progressbar.js');

import {Component, Input, ElementRef} from '@angular/core';
import {BaseShapeComponent} from './shape';
import {ShapeOptions} from './progressbar';

@Component({
  selector: 'ks-circle-progress',
  template: `
    <ng-content></ng-content>
`
})
export class CircleProgressComponent extends BaseShapeComponent {
  @Input() options: ShapeOptions;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngOnInit() {
    super.setShape(new ProgressBar.Circle(this.elementRef.nativeElement, this.options));
    super.animate(0.0);
  }
}
