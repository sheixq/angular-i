import { Injectable } from '@angular/core'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { BeautyLoggerService } from './beauty-logger.service'

export interface Todo {
  id: string
  title: string
  addedDate: string
  order: number
}

interface CommonResponse<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) {}

  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseUrl}/todo-lists`)
      .pipe(catchError(this.errorHandLer.bind(this)))
      .subscribe((todos: Todo[]) => {
        this.todos$.next(todos)
      })
  }

  creteTodo(title: string) {
    this.http
      .post<CommonResponse<{ item: Todo }>>(`${environment.baseUrl}/todo-lists`, { title })
      .pipe(
        catchError(this.errorHandLer.bind(this)),
        map(res => {
          const newTodo = res.data.item
          const stateTodos = this.todos$.getValue()
          return [newTodo, ...stateTodos]
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  removeTodo(todoId: string) {
    this.http
      .delete<CommonResponse>(`${environment.baseUrl}/todo-lists/${todoId}`)
      .pipe(
        catchError(this.errorHandLer.bind(this)),
        map(() => {
          return this.todos$.getValue().filter(el => el.id !== todoId)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  private errorHandLer(err: HttpErrorResponse) {
    this.beautyLoggerService.log(err.message, 'error')
    return EMPTY
  }
}
