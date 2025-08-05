import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent {
  title = 'Angular Binding Demo';

  showMessage() {
    alert('You clicked the button!');
  }
}
