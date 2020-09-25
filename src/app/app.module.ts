import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AppListingComponent} from './app-listing/app-listing.component';
import {AppDataComponent} from './app-data/app-data.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppListingComponent,
    AppDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LoginComponent
      },
      {
        path: "app-listing",
        component: AppListingComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "app-data",
        component: AppDataComponent
      },
      {
        path: "login",
        component: LoginComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
