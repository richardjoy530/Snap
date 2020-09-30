import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Button, DataService, Label, TextBox } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.sass']
})
export class AppDataComponent implements OnInit {
  unSavedControls: any[];
  defaultControls: any[]//not implemented
  currentControl: any
  constructor(public data: DataService, public auth: AuthService, public route: Router) {
    this.unSavedControls = [...data.selectedAppInfo.appData.controls]
    data.selectedControl = ''
    this.defaultControls = [
      new Label(Date.now().toString(), "Name"),
      new TextBox(Date.now().toString(), "Name", "", "Name"),
      new Button(Date.now().toString(), "Submit")]
  }

  ngOnInit(): void {
  }

  getUnsavedControls() {
    return this.unSavedControls
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addLabel() {
    var tempControl = new Label(Date.now().toString(), "Name")
    this.data.selectedControl = "label"
    this.unSavedControls.push(tempControl)
    this.unSavedControls.forEach(element => {
      if (element.id == tempControl.id) {
        this.currentControl = element
      }
    });
  }

  addTextBox() {
    var tempControl = new TextBox(Date.now().toString(), "Name", "", "Name")
    this.data.selectedControl = "textBox"
    this.unSavedControls.push(tempControl)
    this.unSavedControls.forEach(element => {
      if (element.id == tempControl.id) {
        this.currentControl = element
      }
    });
  }

  addButton() {
    var tempControl = new Button(Date.now().toString(), "Submit")
    this.data.selectedControl = "button"
    this.unSavedControls.push(tempControl)
    this.unSavedControls.forEach(element => {
      if (element.id == tempControl.id) {
        this.currentControl = element
      }
    });
  }

  save() {
    this.data.selectedAppInfo.appData.controls = []
    this.unSavedControls.forEach(element => {
      this.data.selectedAppInfo.appData.controls.push(element)
    });
    this.data.editApp(this.data.selectedAppInfo)
    this.unSavedControls = []
    this.route.navigate(["app-listing"])
  }

  onClickControl(control) {
    if (control.lableText) {
      this.data.selectedControl = "label"
    } else if (control.textPlaceholder) {
      this.data.selectedControl = "textBox"
    } else if (control.buttonText) {
      this.data.selectedControl = "button"
    }
    this.currentControl = control
  }

  cancel() {
    this.unSavedControls = []
    this.route.navigate(["app-listing"])
  }

  logout() {
    this.auth.isLoggedIn = false;
    localStorage.removeItem("user")
    this.route.navigate(["login"])
  }


}
