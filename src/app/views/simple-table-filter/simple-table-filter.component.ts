import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  SimpleTableFilterItem,
  SimpleTableFilterDataSource,
} from './simple-table-filter-datasource';

@Component({
  selector: 'app-simple-table-filter',
  templateUrl: './simple-table-filter.component.html',
  styleUrls: ['./simple-table-filter.component.scss'],
})
export class SimpleTableFilterComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<SimpleTableFilterItem>;
  dataSource: SimpleTableFilterDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new SimpleTableFilterDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
