import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineProgressComponent } from './line-component';
import { SemiCircleProgressComponent } from './semi-circle-component';
import { CircleProgressComponent } from './circle-component';

@NgModule({
  imports: [CommonModule],
  declarations: [LineProgressComponent, SemiCircleProgressComponent, CircleProgressComponent],
  exports: [LineProgressComponent, SemiCircleProgressComponent, CircleProgressComponent]
})
export class ProgressBarModule { }
