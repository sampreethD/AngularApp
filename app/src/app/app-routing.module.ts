import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from '../app/components/layout/layout.component'
import {AppComponent} from '../app/app.component'
import {HomeComponent} from '../app/components/home/home.component'
import { LoaderService } from './services/loader.service';
import { HttpHandlerInterceptor } from './interceptor/httpHandler.interceptor';
import { MoviedescriptionComponent } from './components/moviedescription/moviedescription.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'showInfo',component:MoviedescriptionComponent},
  {path: '' ,redirectTo:'/home',resolve:{script:LoaderService},canLoad:[HttpHandlerInterceptor],pathMatch:'full'},
  {path:'**',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
