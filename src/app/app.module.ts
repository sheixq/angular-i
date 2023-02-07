import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CredentialsInterceptor } from './services/credentials.interceptor'

import { AppComponent } from './app.component'
import { TodosComponent } from './components/todos/todos.component'
import { LoginComponent } from './components/login/login.component'
import { UsersComponent } from './components/users/users.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { HomeComponent } from './components/home/home.component'
import { NavigationComponent } from './components/navigation/navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    UsersComponent,
    HomeComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
