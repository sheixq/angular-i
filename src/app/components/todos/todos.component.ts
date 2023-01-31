import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.0/todo-lists', {
        withCredentials: true,
        headers: {
          'api-key': '58c96973-e4a2-4bd0-91c0-b77f47cf280e',
        },
      })
      .subscribe(res => {
        this.todos = res
      })
  }
}
