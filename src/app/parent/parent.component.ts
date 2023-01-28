import { Component } from '@angular/core'
import { Grade } from './child/child.component'

//@Output
//https://angular.io/api/core/Output
//https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component
//https://angular.io/guide/devtools

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  math?: number
  physics?: number
  getGrade(value: Grade) {
    this.math = value.math
    this.physics = value.physics
  }
}
