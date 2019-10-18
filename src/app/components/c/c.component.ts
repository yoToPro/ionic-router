import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss'],
})
export class CComponent implements OnInit {

  @Input() recievedFlag: boolean;
  @Output() sendCFlag = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('In C Comp: ', this.recievedFlag);
  }

  goToAComp() {
    console.log('Load C');
    // this.sendCFlag.emit(!this.recievedFlag);
  }

  goToBComp() {
    console.log('Load B');
    // this.sendCFlag.emit(!this.recievedFlag);
  }

}
