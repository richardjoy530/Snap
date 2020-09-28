import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AppListingComponent} from './app-listing/app-listing.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AppDataComponent } from './app-data/app-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppListingComponent,
    AppDataComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo:"login",
        pathMatch: 'full',
      },
      {
        path: "app-listing",
        component: AppListingComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "app-data",
        component: AppDataComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "login",
        component: LoginComponent,
      },{
        path: "**",
        redirectTo:"login",
        pathMatch: 'full',
      },
    ])
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
