import { Injectable } from '@angular/core'

type BeautyLoggerType = 'error' | 'warning' | 'success' | 'info'

@Injectable({
  providedIn: 'root',
})
export class BeautyLoggerService {
  log(message: string, type: BeautyLoggerType) {
    console.log('%c' + message, this.getColor(type))
  }

  getColor(type: BeautyLoggerType) {
    switch (type) {
      case 'success':
        return 'background: green; color: white;'
      case 'info':
        return 'background: blue; color: white;'
      case 'error':
        return 'background: red; color: white;'
      case 'warning':
        return 'background: orange; color: black;'
      default:
        return ''
    }
  }
}
