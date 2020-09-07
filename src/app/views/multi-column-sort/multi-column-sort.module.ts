import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiColumnSortRoutingModule } from './multi-column-sort-routing.module';
import { MultiColumnSortComponent } from './multi-column-sort.component';


@NgModule({
  declarations: [MultiColumnSortComponent],
  imports: [
    CommonModule,
    MultiColumnSortRoutingModule
  ]
})
export class MultiColumnSortModule { }
