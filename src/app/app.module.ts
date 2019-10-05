import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedirectComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }