import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Button, DataService, Label, TextBox } from '../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.sass']
})
export class AppDataComponent implements OnInit {
  unSavedControls: any[];
  selectedControl: string
  currentControl: any
  constructor(public data: DataService, public auth: AuthService, public route: Router) {
    this.unSavedControls = [...data.selectedAppInfo.appData.controls]
  }

  ngOnInit(): void {
  }

  getUnsavedControls() {
    return this.unSavedControls
  }

  addLabel() {
    var tempControl = new Label(Date.now().toString(), "Name")
    this.selectedControl = "label"
    this.unSavedControls.push(tempControl)
    this.unSavedControls.forEach(element => {
      if (element.id == tempControl.id) {
        this.currentControl = element
      }
    });
  }

  addTextBox() {
    var tempControl = new TextBox(Date.now().toString(), "Name", "", "Name")
    this.selectedControl = "textBox"
    this.unSavedControls.push(tempControl)
    this.unSavedControls.forEach(element => {
      if (element.id == tempControl.id) {
        this.currentControl = element
      }
    });
  }

  addButton() {
    var tempControl = new Button(Date.now().toString(), "Submit")
    this.selectedControl = "button"
    this.unSavedControls.push(tempControl)
    this.unSavedControls.forEach(element => {
      if (element.id == tempControl.id) {
        this.currentControl = element
      }
    });
  }

  save() {
    this.unSavedControls.forEach(element => {
      this.data.selectedAppInfo.appData.controls.push(element)
    });
    this.data.editApp(this.data.selectedAppInfo)
    this.unSavedControls = []
    this.route.navigate(["app-listing"])
  }

  onClickControl(control) {
    if (control.lableText) {
      this.selectedControl = "label"
    } else if (control.textPlaceholder) {
      this.selectedControl = "textBox"
    } else if (control.buttonText) {
      this.selectedControl = "button"
    }
    this.currentControl = control
  }

  cancel() {
    this.unSavedControls = []
    this.route.navigate(["app-listing"])
  }

  logout() {
    this.auth.isLoggedIn = false;
    localStorage.setItem("user", "")
    this.route.navigate(["login"])
  }


}
