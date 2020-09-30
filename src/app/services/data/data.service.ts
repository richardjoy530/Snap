import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedAppInfo: AppInfo
  appsInfo: Array<AppInfo>
  selectedControl: string

  constructor() {
    this.appsInfo = JSON.parse(localStorage.getItem("appsInfoList"))
    this.selectedAppInfo=null
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

  editApp(appInfo: AppInfo) {
    this.appsInfo.forEach(oldAppInfo => {
      if (oldAppInfo.id == appInfo.id) {
        const index = this.appsInfo.indexOf(oldAppInfo)
        if (index > -1) {
          this.appsInfo.splice(index, 1, appInfo)
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
  constructor(public name: string, public description: string, public appData: AppData) {
  }
}

export class AppData {
  constructor(public controls: any[]) {
  }
}

export class Button {
  constructor(public id: string, public buttonText: string) {
  }
}

export class Label {
  constructor(public id: string, public lableText: string) {
  }
}

export class TextBox {
  constructor(public id: string, public name: string, public value: string, public textPlaceholder: string) {
  }
}

export class InputGeneral {
  constructor(public id: string, public name: string, public type: InputTypes,
    public value: string, public placeholder: string, public checked: string) {
  }
}

enum InputTypes {
  Radio = "radio",
  Text = "text",
  Checkbox = "checkbox",
  File = "file",
  DateTime = "dateTime"
}