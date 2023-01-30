import { Component } from '@angular/core'

// Pipes
// https://angular.io/api/?type=pipe
// https://angular.io/api/core/Pipe

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  title = 'Lorem ipsum dolor sit amet'
  url = 'https://angular.io/api/commons/SlicePipe'
  date = new Date(2022, 4, 12, 10)
}
