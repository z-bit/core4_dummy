import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material';


import { CoreRouting } from './core-routing';

import { CoreComponent } from './core/core.component';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRouting,
    AppMaterialModule,
  ],
})
export class CoreModule { }
