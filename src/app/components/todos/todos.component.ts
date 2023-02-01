import { Component, OnDestroy, OnInit } from '@angular/core'
import { Todo, TodosService } from 'src/app/services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Subscription } from 'rxjs'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todo[] = []
  error = ''

  subscription: Subscription | null = null
  subscription2: Subscription | null = null
  subscription3: Subscription | null = null

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
      this.subscription = null
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe()
      this.subscription2 = null
    }
    if (this.subscription3) {
      this.subscription3.unsubscribe()
      this.subscription3 = null
    }
  }

  getTodos() {
    this.subscription = this.todosService.getTodos().subscribe({
      next: (res: Todo[]) => {
        this.todos = res
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.message
      },
    })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber
    this.subscription2 = this.todosService.createTodo(title).subscribe(res => {
      this.todos.unshift(res.data.item)
    })
  }

  delete() {
    const todoId = '3bafcb8f-b0e9-4cb0-9861-c51541a9b56a'
    this.subscription3 = this.todosService.delete(todoId).subscribe(() => {
      this.todos = this.todos.filter(tl => tl.id !== todoId)
    })
  }
}
