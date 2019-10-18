import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AComponent } from 'src/app/components/a/a.component';
import { BComponent } from 'src/app/components/b/b.component';
import { CComponent } from 'src/app/components/c/c.component';
import { DComponent } from 'src/app/components/d/d.component';

@NgModule({
  declarations: [
    AComponent,
    BComponent,
    CComponent,
    DComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AComponent,
    BComponent,
    CComponent,
    DComponent
  ]
})
export class CustomModule { }
