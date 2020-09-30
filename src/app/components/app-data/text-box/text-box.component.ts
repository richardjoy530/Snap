import { Component, Input, OnInit } from '@angular/core';
import { DataService, TextBox } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['../control-properties.sass']
})
export class TextBoxComponent implements OnInit {

  constructor(public data:DataService) { }

  @Input() control: TextBox
  @Input() unSavedControls: any[]
  ngOnInit(): void {
  }

  detele() {
    this.data.selectedControl=''
    const index = this.unSavedControls.indexOf(this.control)
    if (index > -1) {
      this.unSavedControls.splice(index, 1)
    }
  }
}
