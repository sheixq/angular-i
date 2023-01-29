import { Component } from '@angular/core'

// Задача на проработку директив
// Проработка ngFor, ngIf, ngClass
// 1. Отрисовать массив фруктов (вывести name и price)
// 2. Нечетные эл. массива отобразить зеленым цветом
// 3. Четные эл. массива отобразить красным цветом
// 4. Отобразить только продукты стоимостью больше 7
// 5. Продукты стоимостью больше 15 добавить любой стиль,
// который их выделит в списке (например жирный шрифт или размер шрифты сделать больше)

interface Fruit {
  id: string
  name: string
  price: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  fruits: Fruit[] = [
    { id: '1', name: 'apple', price: 10 },
    { id: '2', name: 'orange', price: 20 },
    { id: '3', name: 'watermelon', price: 30 },
    { id: '4', name: 'banana', price: 5 },
    { id: '5', name: 'pears', price: 12 },
    { id: '6', name: 'raspberries', price: 18 },
    { id: '7', name: 'avocados', price: 14 },
    { id: '8', name: 'mangoes', price: 3 },
    { id: '9', name: 'kiwifruit', price: 7 },
  ]
}
