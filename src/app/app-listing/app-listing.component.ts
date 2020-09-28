import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppInfo, DataService } from '../data.service';
@Component({
  selector: 'app-app-listing',
  templateUrl: './app-listing.component.html',
  styleUrls: ['./app-listing.component.sass']
})
export class AppListingComponent implements OnInit {
  showNewDiv = false
  showUpdateDiv = false
  oldAppInfo: AppInfo
  constructor(public auth: AuthService, private route: Router, private data: DataService) { }

  ngOnInit(): void {
    this.showUpdateDiv = false
    this.showNewDiv = false
  }
  getAppList() {
    return this.data.appsInfo
  }
  addApp(event) {
    console.log(event)
    const name = event.target[0].value
    const description = event.target[1].value
    this.data.addAppInfo(new AppInfo(name, description))
    this.showUpdateDiv = false
    this.showNewDiv = false
  }
  delete(appInfo: AppInfo) {
    this.data.deleteApp(appInfo)
  }
  saveOldInfo(appInfo: AppInfo) {
    this.showUpdateDiv = true 
    this.oldAppInfo = appInfo
  }
  saveOldData(appInfo: AppInfo) {
    this.data.selectedAppInfo = appInfo
    this.route.navigate(["app-data"])
  }

  updateAppInfo(event) {
    console.log(event)
    this.oldAppInfo.name = event.target[0].value
    this.oldAppInfo.description = event.target[1].value
    this.data.editAppInfo(this.oldAppInfo)
    this.showNewDiv = false
    this.showUpdateDiv = false
  } 
  logout() {
    this.auth.isLoggedIn = false;
    this.auth.currentUser=null;
    localStorage.setItem("user","")
    this.route.navigate(["login"])
  }

}
