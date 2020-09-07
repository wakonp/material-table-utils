import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleTableRoutingModule } from './simple-table-routing.module';
import { SimpleTableComponent } from './simple-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DescriptionCardModule } from 'src/app/features/description-card/description-card.module';

@NgModule({
  declarations: [SimpleTableComponent],
  imports: [
    CommonModule,
    SimpleTableRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DescriptionCardModule,
  ],
})
export class SimpleTableModule {}
