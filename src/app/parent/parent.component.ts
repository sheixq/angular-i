import { Component } from '@angular/core'

// NgClass
// https://angular.io/api/common/NgClass

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  isSuccess = false

  constructor() {
    setTimeout(() => {
      this.isSuccess = true
    }, 3000)
  }
}
