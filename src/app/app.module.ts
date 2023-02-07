import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { HomeModule } from './home/home.module'
import { TodosModule } from './todos/todos.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    TodosModule,
    UsersModule,
    AuthModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
