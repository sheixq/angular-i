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

  subscription: Subscription = new Subscription()

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getTodos() {
    this.subscription.add(
      this.todosService.getTodos().subscribe({
        next: (res: Todo[]) => {
          this.todos = res
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.message
        },
      })
    )
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber
    this.subscription.add(
      this.todosService.createTodo(title).subscribe(res => {
        this.todos.unshift(res.data.item)
      })
    )
  }

  delete() {
    const todoId = '3bafcb8f-b0e9-4cb0-9861-c51541a9b56a'
    this.subscription.add(
      this.todosService.delete(todoId).subscribe(() => {
        this.todos = this.todos.filter(tl => tl.id !== todoId)
      })
    )
  }
}
