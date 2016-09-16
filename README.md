# angular2-progressbar

# Install

npm install angular2-progressbar --save

# Usage

```
import {
  ShapeOptions,
  LineProgressComponent,
  CircleProgressComponent,
  SemiCircleProgressComponent} from 'angular2-progressbar';

@Component({
  selector: 'app',
  template: `
    <div class="line-container">
      <ks-line-progress [options]="lineOptions"></ks-line-progress>
    </div>
    <div class="circle-container">
      <ks-circle-progress [options]="circleOptions"></ks-circle-progress>
    </div>
    <div class="semi-circle-container">
      <ks-semi-circle-progress [options]="semiCircleOptions"></ks-semi-circle-progress>
    </div>
  `
})
export class AppComponent {

  @ViewChild(LineProgressComponent) lineComp: LineProgressComponent;
  @ViewChild(CircleProgressComponent) circleComp: CircleProgressComponent;
  @ViewChild(SemiCircleProgressComponent) semiCircleComp: SemiCircleProgressComponent;

  private lineOptions: ShapeOptions = {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%' }
  };

  private circleOptions: ShapeOptions = {
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: { color: '#FFEA82', a: 0 },
    to: { color: '#ED6A5A', a: 1 },
    // Set default step function for all animate calls
    step: function(state: any, circle: any) {
      circle.path.setAttribute('stroke', state.color);
    }
  };

  private semiCircleOptions: ShapeOptions = {
    strokeWidth: 6,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      value: '',
      alignToBottom: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    // Set default step function for all animate calls
    step: (state: any, bar: any) => {
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value);
      }

      bar.text.style.color = state.color;
    }
  };

  ngAfterViewInit() {
    this.lineComp.animate(0.9);
    this.circleComp.animate(0.8);
    this.semiCircleComp.animate(0.9);
  }

}
```

See [angular2-progressbar-example](https://github.com/ksachdeva/angular2-progressbar-example) repository for the full example
