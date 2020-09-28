import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.sass']
})
export class AppDataComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

}
