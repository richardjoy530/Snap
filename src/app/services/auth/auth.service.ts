import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersList: Array<User>
  isLoggedIn: boolean
  currentUser: User
  constructor() {

    this.usersList = [
      new User("admin", "admin123", [permissions.EditAppData, permissions.EditAppInfo, permissions.CreateAppData, permissions.CreateAppInfo, permissions.DeleteApp]),
      new User("manager", "manager123", [permissions.EditAppData, permissions.EditAppInfo, permissions.CreateAppData, permissions.CreateAppInfo]),
      new User("author", "author123", [permissions.CreateAppData, permissions.CreateAppInfo]),
      new User("editor", "editor123", [permissions.EditAppData, permissions.EditAppInfo]),
      new User("richard", "pass123", [permissions.EditAppData, permissions.EditAppInfo]),
      new User("tester", "tester123", [permissions.DeleteApp]),
    ]

    this.isLoggedIn = false

    if (localStorage.getItem("user") != "" && localStorage.getItem("user") != null) {
      var temp = JSON.parse(localStorage.getItem("user"))
      if (temp != null) {
        this.isLoggedIn = true
        this.currentUser = temp
      }
    }
  }

  authenticate(username: string, password: any) {

    this.usersList.forEach(user => {
      if (user.username.toLowerCase() == username && user.password == password) {
        this.currentUser = user
        this.isLoggedIn = true
        localStorage.setItem("user", JSON.stringify(user))
        return true
      }
    });
    return false
  }
}

export enum permissions {
  DeleteApp = "Delete App",
  EditAppInfo = "Edit App Info",
  EditAppData = "Edit App Data",
  CreateAppInfo = "Create App Info",
  CreateAppData = "Create App Data"
}

export class User {
  constructor(public username: string, public password: string, public permissions: Array<string>) {
  }
}