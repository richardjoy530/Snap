import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AppListingComponent } from './components/app-listing/app-listing.component';
import { AppDataComponent } from './components/app-data/app-data.component';
import { TextBoxComponent } from './components/app-data/text-box/text-box.component';
import { LabelComponent } from './components/app-data/label/label.component';
import { InputComponent } from './components/app-data/input/input.component';
import { ButtonComponent } from './components/app-data/button/button.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCreateInfoComponent } from './components/app-listing/edit-create-info/edit-create-info.component';
import { AppDataGuard } from './guards/data/app-data.guard';


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
    EditCreateInfoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    DragDropModule,
    BrowserAnimationsModule,
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
        // data: { animation: "app-listing" }
      },
      {
        path: "app-data",
        component: AppDataComponent,
        canActivate: [AuthGuard, AppDataGuard],
        // data: { animation: "app-data" }
      },
      {
        path: "login",
        component: LoginComponent,
        // data: { animation: "login" }
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
