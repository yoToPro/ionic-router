import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  public options = [
    {
      name: 'Refresh Task',
      value: 1,
      icon: 'refresh-circle'
    },
    {
      name: 'User Settings',
      value: 2,
      icon: 'contact'
    },
    {
      name: 'Logout',
      value: 3,
      icon: 'log-out'
    },
  ];

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  clickItem(option: any) {
    console.log('selected option: ', option.value);
    this.popoverController.dismiss(option.value);
  }

}
