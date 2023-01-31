import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { TodosComponent } from './components/todos/todos.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
