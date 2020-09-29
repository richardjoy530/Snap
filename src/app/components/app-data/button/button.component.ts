import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'src/app/services/data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['../control-properties.sass']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() control: Button
  @Input() unSavedControls: any[]
  ngOnInit(): void {
  }

  detele() {
    this.unSavedControls
    const index = this.unSavedControls.indexOf(this.control)
    if (index > -1) {
      this.unSavedControls.splice(index, 1)
    }
  }
}
