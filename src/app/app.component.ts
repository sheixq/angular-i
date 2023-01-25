import { Component } from '@angular/core'

interface IUser {
  age: number
  name: string
}

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Instagram'
  textInput = ''
  textKeyUp = ''
  user: IUser = {
    age: 32,
    name: 'Ivan',
  }
  isLoading = true

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

  changeTitleHandler() {
    this.appTitle = 'It-incubator'
  }
  changeTextInputHandler(event: Event) {
    this.textInput = (event.currentTarget as HTMLInputElement).value
  }
  changeTextKeyUpHandler(event: Event) {
    this.textKeyUp = (event.currentTarget as HTMLInputElement).value
  }
}
