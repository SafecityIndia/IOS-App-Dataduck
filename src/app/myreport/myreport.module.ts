import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MyreportPageRoutingModule } from './myreport-routing.module';

import { MyreportPage } from './myreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,TranslateModule,
    MyreportPageRoutingModule
  ],
  declarations: [MyreportPage]
})
export class MyreportPageModule {}
