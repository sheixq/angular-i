import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}
interface BaseResponse<T = Record<string, never>> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': '58c96973-e4a2-4bd0-91c0-b77f47cf280e',
    },
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.0/todo-lists', this.httpOptions)
      .subscribe(res => {
        this.todos = res
      })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber
    this.http
      .post<BaseResponse<{ item: Todo }>>(
        'https://social-network.samuraijs.com/api/1.0/todo-lists',
        { title },
        this.httpOptions
      )
      .subscribe(res => {
        this.todos.unshift(res.data.item)
      })
  }

  delete() {
    const todoId = '6830f47e-ce03-4a0d-8347-9413a082826b'
    this.http
      .delete<BaseResponse>(
        `https://social-network.samuraijs.com/api/1.0/todo-lists/${todoId}`,
        this.httpOptions
      )
      .subscribe(() => {
        this.todos = this.todos.filter(tl => tl.id !== todoId)
      })
  }
}
