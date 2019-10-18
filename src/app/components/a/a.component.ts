import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class AComponent implements OnInit {

  @Input() recievedFlag: boolean;
  @Output() sendAFlag = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('In A Comp: ', this.recievedFlag);
  }

  goToBComp() {
    console.log('Load B');
    // this.sendAFlag.emit(!this.recievedFlag);
  }

  goToCComp() {
    console.log('Load C');
    // this.sendAFlag.emit(!this.recievedFlag);
  }

}
