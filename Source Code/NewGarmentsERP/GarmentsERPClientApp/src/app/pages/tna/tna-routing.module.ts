import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from '../libraryModule/test/test.component';
import { TNATemplateEntryComponent } from './tnatemplate-entry/tnatemplate-entry.component';

const routes: Routes = [
  {path:'tna-template-entry',component:TNATemplateEntryComponent},
  {path:'test',component:TestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TnaRoutingModule { }
