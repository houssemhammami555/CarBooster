import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  showHideSideBar:Boolean=false;
  onshowSideBarChange(showHideSideBar){
    this.showHideSideBar=showHideSideBar;

  }
  ngOnInit() {
  }

}
