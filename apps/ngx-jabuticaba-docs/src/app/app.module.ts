import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxJabuticabaModule } from '@lucini/ngx-jabuticaba';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxJabuticabaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
