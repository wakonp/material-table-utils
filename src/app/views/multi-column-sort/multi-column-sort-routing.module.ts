import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiColumnSortComponent } from './multi-column-sort.component';

const routes: Routes = [{ path: '', component: MultiColumnSortComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiColumnSortRoutingModule { }
