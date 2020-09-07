import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleTableFilterComponent } from './simple-table-filter.component';

const routes: Routes = [{ path: '', component: SimpleTableFilterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleTableFilterRoutingModule { }
