import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  appsInfo: Array<AppInfo>
  constructor(){
    this.appsInfo = []
  }
  addAppInfo(appInfo: AppInfo) {
    appInfo.id = Date.now()
    this.appsInfo.push(appInfo)
    return true
  }

  deleteApp(appInfo: AppInfo) {
    const index = this.appsInfo.indexOf(appInfo)
    if (index > -1) {
      this.appsInfo.splice(index, 1)
      return true
    }
    else return false
  }

  editAppInfo(appInfo: AppInfo) {
    this.appsInfo.forEach(oldAppInfo => {
      if (oldAppInfo.id == appInfo.id) {
        const index = this.appsInfo.indexOf(oldAppInfo)
        if (index > -1) {
          this.appsInfo.splice(index, 1)
          this.appsInfo.push(appInfo)
          return true
        }
        else return false
      }
    });

  }

  editAppData(appInfo:AppInfo){
    this.appsInfo.forEach(oldAppInfo => {
      if (oldAppInfo.id == appInfo.id) {
        const index = this.appsInfo.indexOf(oldAppInfo)
        if (index > -1) {
          this.appsInfo.splice(index, 1)
          this.appsInfo.push(appInfo)
          return true
        }
        else return false
      }
    });
  }

}


export class AppInfo {
  id: number
  appData: AppData
  constructor(public name: string, public description: string) {
  }
}

export class AppData{

}