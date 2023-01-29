import { Component } from '@angular/core'

// NgStyle
// https://angular.io/api/common/NgStyle

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  isSuccess = false

  styles = {
    color: 'blue',
    margin: '20px',
    opacity: '0.2',
  }

  constructor() {
    setTimeout(() => {
      this.isSuccess = true
    }, 3000)
  }
}
