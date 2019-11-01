import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarBooster';
  showHideSideBar:Boolean=false;
  onshowSideBarChange(showHideSideBar){
    this.showHideSideBar=showHideSideBar;

  }
}
