import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneListRoutingModule } from './phone-list-routing.module';
import { PhoneListComponent } from './phone-list.component';
import { PhoneComponent } from './phone/phone.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PhoneListComponent,
    PhoneComponent
  ],
  exports: [
    PhoneListComponent
  ],
  imports: [
    CommonModule,
    PhoneListRoutingModule,
    FormsModule
  ]
})
export class PhoneListModule { }
