import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public showAComp = true;
  public showBComp = true;
  public showCComp = true;
  public componentFlag = false;

  constructor() {
    this.loadComponent();
  }

  ngOnInit() { }

  getFlag(flagRecieved: boolean) {
    console.log('Flag recieved at home: ', flagRecieved);
    this.componentFlag = flagRecieved;
  }

  loadComponent() {
    switch (this.componentFlag) {
      case this.showAComp:
        this.showBComp = false;
        this.showCComp = false;
        console.log('Show A Comp: ', this.showAComp);
        console.log('Show B Comp: ', this.showBComp);
        console.log('Show C Comp: ', this.showCComp);
        break;
      case this.showBComp:
        this.showAComp = false;
        this.showCComp = false;
        console.log('Show A Comp: ', this.showAComp);
        console.log('Show B Comp: ', this.showBComp);
        console.log('Show C Comp: ', this.showCComp);
        break;
      case this.showCComp:
        this.showAComp = false;
        this.showBComp = false;
        console.log('Show A Comp: ', this.showAComp);
        console.log('Show B Comp: ', this.showBComp);
        console.log('Show C Comp: ', this.showCComp);
        break;
      default:
        this.showAComp = true;
        this.showBComp = false;
        this.showCComp = false;
        console.log('Show A Comp: ', this.showAComp);
        console.log('Show B Comp: ', this.showBComp);
        console.log('Show C Comp: ', this.showCComp);
        break;
    }
  }

}
