import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedAppInfo: AppInfo
  appsInfo: Array<AppInfo>
  constructor() {
    // TODO: remove the next line
    this.selectedAppInfo = new AppInfo("Test Data", "Dummy Description")
    this.appsInfo = JSON.parse(localStorage.getItem("appsInfoList"))
    if (this.appsInfo == null) {
      this.appsInfo = []
    }

  }

  addAppInfo(appInfo: AppInfo) {
    appInfo.id = Date.now()
    this.appsInfo.push(appInfo)
    localStorage.setItem("appsInfoList", JSON.stringify(this.appsInfo));
    return true
  }

  deleteApp(appInfo: AppInfo) {
    const index = this.appsInfo.indexOf(appInfo)
    if (index > -1) {
      this.appsInfo.splice(index, 1)
      localStorage.setItem("appsInfoList", JSON.stringify(this.appsInfo));
      return true
    }
    else
      return false
  }

  editAppInfo(appInfo: AppInfo) {
    this.appsInfo.forEach(oldAppInfo => {
      if (oldAppInfo.id == appInfo.id) {
        const index = this.appsInfo.indexOf(oldAppInfo)
        if (index > -1) {
          this.appsInfo.splice(index, 1)
          this.appsInfo.push(appInfo)
          localStorage.setItem("appsInfoList", JSON.stringify(this.appsInfo));
          return true
        }
        else return false
      }
    });
  }

  editAppData(appInfo: AppInfo) {
    this.appsInfo.forEach(oldAppInfo => {
      if (oldAppInfo.id == appInfo.id) {
        const index = this.appsInfo.indexOf(oldAppInfo)
        if (index > -1) {
          this.appsInfo.splice(index, 1)
          this.appsInfo.push(appInfo)
          localStorage.setItem("appsInfoList", JSON.stringify(this.appsInfo));
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

export class AppData {
  controls: []
}


export class Button {
  public id: string
  public ButtonText: string

} export class Label {
  public id: string
  public LableText: string

} export class TextBox {
  public id: string
  public value: string

}