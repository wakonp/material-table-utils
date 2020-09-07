import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnFilterRoutingModule } from './column-filter-routing.module';
import { ColumnFilterComponent } from './column-filter.component';


@NgModule({
  declarations: [ColumnFilterComponent],
  imports: [
    CommonModule,
    ColumnFilterRoutingModule
  ]
})
export class ColumnFilterModule { }
