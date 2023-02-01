import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, map } from 'rxjs'
import { environment } from '../../environment/environment'

export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}
export interface BaseResponse<T = Record<string, never>> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]) // TODO что такое поток
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environment.apiKey,
    },
  }

  constructor(private http: HttpClient) {}

  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
      .subscribe(todos => {
        this.todos$.next(todos) // TODO не совсем понятен этот момент, то есть как работает метод next
      })
  }

  createTodo(title: string) {
    this.http
      .post<BaseResponse<{ item: Todo }>>(
        `${environment.baseUrl}/todo-lists`,
        { title },
        this.httpOptions
      )
      .pipe(
        map(res => {
          const newTodo = res.data.item
          const stateTodos = this.todos$.getValue()
          return [newTodo, ...stateTodos] // TODO также не до конца понятно что тут происходит
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  delete(todoId: string) {
    this.http
      .delete<BaseResponse>(`${environment.baseUrl}/todo-lists/${todoId}`, this.httpOptions)
      .pipe(
        map(() => {
          return this.todos$.getValue().filter(tl => tl.id !== todoId)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }
}
