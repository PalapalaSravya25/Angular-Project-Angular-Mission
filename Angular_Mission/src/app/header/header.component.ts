import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "Angular Program";
  techName: string = "Angular4";

  constructor() { }

  ngOnInit(): void {
  }

}

