import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login/components/login/login.component'

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
