import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { ProfileComponent } from './components/profile/profile.component'
import { TodosComponent } from './components/todos/todos.component'
import { UsersComponent } from './components/users/users.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProfileComponent,
    TodosComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'todos', component: TodosComponent },
      { path: 'users', component: UsersComponent },
      { path: 'profile', component: ProfileComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
