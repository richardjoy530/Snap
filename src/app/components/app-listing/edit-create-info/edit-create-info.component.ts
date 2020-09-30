import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppInfo, DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-edit-create-info',
  templateUrl: './edit-create-info.component.html',
  styleUrls: ['./edit-create-info.component.sass']
})
export class EditCreateInfoComponent implements OnInit {
  @Input() process: string
  @Input() appInfo: AppInfo
  description: string
  buttonText: string;
  appInfoForm: FormGroup;

  constructor(public data: DataService, public form: FormBuilder) {



    if (this.process == "new") {
      this.buttonText = "Create"
      this.description = "Add App"
      this.appInfoForm = this.form.group({
        name: '',
        description: '',
      })
    }

    else if (this.process == "update") {
      this.description = "Update App Info"
      this.buttonText = "Update"
      this.appInfoForm = this.form.group({
        name: this.appInfo.name,
        description: this.appInfo.description,
      })
    }

  }

  ngOnInit(): void {
  }

  click() {
    console.log(this.appInfo.name,this.appInfoForm.value.name)
    this.appInfo.name = this.appInfoForm.value.name
    this.appInfo.description = this.appInfoForm.value.description
  }
}
