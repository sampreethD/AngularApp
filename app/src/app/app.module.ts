import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {LoaderService} from '../app/services/loader.service';
import { HttpHandlerInterceptor } from './interceptor/httpHandler.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MovieSectionComponent } from './components/movie-section/movie-section.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MoviedescriptionComponent } from './components/moviedescription/moviedescription.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    MovieSectionComponent,
    MoviedescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    LoaderService,{provide:HTTP_INTERCEPTORS,useClass:HttpHandlerInterceptor,multi:true}
   ],
  bootstrap: [LayoutComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
