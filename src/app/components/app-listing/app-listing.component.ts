import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppData, AppInfo, DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-app-listing',
  templateUrl: './app-listing.component.html',
  styleUrls: ['./app-listing.component.sass'],
  animations: [
    trigger('sweep', [
      state('void', style({ height: 0 })),
      transition('void => *', [
        animate('200ms ease-out')]),
      transition('* => void', [
        animate('200ms ease-in')]),
    ])],
})
export class AppListingComponent implements OnInit {

  showNewDiv = false
  showUpdateDiv = false
  oldAppInfo: AppInfo

  newAppForm: FormGroup;
  updateAppForm: FormGroup;

  constructor(public auth: AuthService, private route: Router, private data: DataService, private form: FormBuilder) { }

  ngOnInit(): void {
    this.newAppForm = this.form.group({
      name: '',
      description: '',
    })
    this.updateAppForm = this.form.group({
      name: '',
      description: '',
    })
    this.showUpdateDiv = false
    this.showNewDiv = false
  }


  getAppList() {
    return this.data.appsInfo
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data.appsInfo, event.previousIndex, event.currentIndex);
    localStorage.setItem("appsInfoList", JSON.stringify(this.data.appsInfo));
  }

  addApp() {
    this.data.addAppInfo(new AppInfo(this.newAppForm.value.name, this.newAppForm.value.description, new AppData([])))
    this.showUpdateDiv = false
    this.showNewDiv = false
  }

  delete(appInfo: AppInfo) {
    this.data.deleteApp(appInfo)
  }

  saveOldInfo(appInfo: AppInfo) {
    this.showUpdateDiv = true
    this.oldAppInfo = appInfo
    this.updateAppForm = this.form.group({
      name: appInfo.name,
      description: appInfo.description,
    })
  }

  saveOldData(appInfo: AppInfo) {
    this.data.selectedAppInfo = appInfo
    this.route.navigate(["app-data"])
  }

  updateAppInfo() {
    this.oldAppInfo.name = this.updateAppForm.value.name
    this.oldAppInfo.description = this.updateAppForm.value.description
    this.data.editApp(this.oldAppInfo)
    this.showNewDiv = false
    this.showUpdateDiv = false
    this.oldAppInfo = null
  }

  logout() {
    this.auth.isLoggedIn = false;
    this.auth.currentUser = null;
    localStorage.removeItem("user")
    this.route.navigate(["login"])
  }
}
