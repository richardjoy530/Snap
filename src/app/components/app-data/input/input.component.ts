import { Component, Input, OnInit } from '@angular/core';
import { InputGeneral } from '../../services/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Input() control:InputGeneral
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
