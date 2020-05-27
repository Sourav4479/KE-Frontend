import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const tabs = document.querySelector('.tabs')
    M.Tabs.init(tabs,{})
  }

}
