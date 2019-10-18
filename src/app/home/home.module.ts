import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { CustomModule } from '../Module/custom/custom.module';
// import { AComponent } from '../components/a/a.component';
// import { BComponent } from '../components/b/b.component';
// import { CComponent } from '../components/c/c.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CustomModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
