import { Component } from '@angular/core'

//@Input
//https://angular.io/api/core/Input
//https://angular.io/guide/inputs-outputs#sending-data-to-a-child-component
//https://angular.io/guide/styleguide#avoid-aliasing-inputs-and-outputs
//https://angular.io/guide/styleguide#initialize-inputs

export interface Address {
  city: string
  street: string
  house: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  name = 'Ivan'
  surname = 'Petrov'
  address: Address = {
    city: 'Minsk',
    street: 'Platonova',
    house: 49,
  }
}
