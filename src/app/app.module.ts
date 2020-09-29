import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AppListingComponent } from './components/app-listing/app-listing.component';
import { AppDataComponent } from './components/app-data/app-data.component';
import { TextBoxComponent } from './components/app-data/text-box/text-box.component';
import { LabelComponent } from './components/app-data/label/label.component';
import { InputComponent } from './components/app-data/input/input.component';
import { ButtonComponent } from './components/app-data/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppListingComponent,
    AppDataComponent,
    TextBoxComponent,
    LabelComponent,
    ButtonComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "login",
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
      }, {
        path: "**",
        redirectTo: "login",
        pathMatch: 'full',
      },
    ])
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
