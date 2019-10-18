import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
})
export class BComponent implements OnInit {

  @Input() recievedFlag: boolean;
  @Output() sendBFlag = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('In B Comp: ', this.recievedFlag);
  }

  goToCComp() {
    console.log('Load C');
    // this.sendBFlag.emit(!this.recievedFlag);
  }

  goToAComp() {
    console.log('Load A');
    // this.sendBFlag.emit(!this.recievedFlag);
  }

}
