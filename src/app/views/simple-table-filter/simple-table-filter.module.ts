import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleTableFilterRoutingModule } from './simple-table-filter-routing.module';
import { SimpleTableFilterComponent } from './simple-table-filter.component';
import { DescriptionCardModule } from 'src/app/features/description-card/description-card.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SimpleTableFilterComponent],
  imports: [
    CommonModule,
    SimpleTableFilterRoutingModule,
    DescriptionCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SimpleTableFilterModule {}
