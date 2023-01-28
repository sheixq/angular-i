import { Component, EventEmitter, Output } from '@angular/core'

export interface Grade {
  math: number
  physics: number
}

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<Grade>()

  sendGradeHandler() {
    const math = 5
    const physics = 4
    this.sendGradeEvent.emit({ math, physics })
  }
}
