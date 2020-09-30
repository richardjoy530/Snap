import { Component, Input, OnInit } from '@angular/core';
import { DataService, Label } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['../control-properties.sass']
})
export class LabelComponent implements OnInit {

  constructor(public data:DataService) { }

  @Input() control: Label
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
