import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Seb7aComponent } from './components/seb7a/seb7a.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostNewZekrComponent } from './components/post-new-zekr/post-new-zekr.component';

import { FormsModule } from '@angular/forms';
import { UpdateDeleteZekrComponent } from './components/update-delete-zekr/update-delete-zekr.component';
import { UpdateZekrComponent } from './components/update-zekr/update-zekr.component';

@NgModule({
  declarations: [
    AppComponent,
    Seb7aComponent,
    MainPageComponent,
    HomeComponent,
    PostNewZekrComponent,
    UpdateDeleteZekrComponent,
    UpdateZekrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
