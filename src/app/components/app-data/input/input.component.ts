import { Component, Input, OnInit } from '@angular/core';
import { DataService, InputGeneral } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  constructor(public data: DataService) { }
  @Input() control: InputGeneral
  @Input() unSavedControls: any[]
  ngOnInit(): void {
  }
  detele() {
    this.data.selectedControl = ''
    const index = this.unSavedControls.indexOf(this.control)
    if (index > -1) {
      this.unSavedControls.splice(index, 1)
    }
  }

}
