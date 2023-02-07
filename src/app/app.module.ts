import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { ProfileComponent } from './components/profile/profile.component'
import { TodosComponent } from './components/todos/todos.component'
import { UsersComponent } from './components/users/users.component'
import { AppRoutingRoutingModule } from './app-routing-routing.module'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { CredentialsInterceptor } from './interceptors/credentials.interceptor'

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
  imports: [BrowserModule, AppRoutingRoutingModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
