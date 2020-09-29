import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TnaRoutingModule } from './tna-routing.module';
import { TNATemplateEntryComponent } from './tnatemplate-entry/tnatemplate-entry.component';


@NgModule({
  declarations: [TNATemplateEntryComponent],
  imports: [
    CommonModule,
    TnaRoutingModule
  ]
})
export class TnaModule { }
