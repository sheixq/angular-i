import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CompAComponent } from './components/comp-a/comp-a.component'
import { CompBComponent } from './components/comp-b/comp-b.component'

@NgModule({
  declarations: [AppComponent, CompAComponent, CompBComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
