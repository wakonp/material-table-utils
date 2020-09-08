import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  tap,
  startWith,
  skip,
} from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { FormControl } from '@angular/forms';

// TODO: Replace this with your own data model type
export interface SimpleTableFilterItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: SimpleTableFilterItem[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' },
  { id: 11, name: 'Sodium' },
  { id: 12, name: 'Magnesium' },
  { id: 13, name: 'Aluminum' },
  { id: 14, name: 'Silicon' },
  { id: 15, name: 'Phosphorus' },
  { id: 16, name: 'Sulfur' },
  { id: 17, name: 'Chlorine' },
  { id: 18, name: 'Argon' },
  { id: 19, name: 'Potassium' },
  { id: 20, name: 'Calcium' },
];

/**
 * Data source for the SimpleTableFilterFilter view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SimpleTableFilterDataSource extends DataSource<
  SimpleTableFilterItem
> {
  filter: FormControl = new FormControl('');
  data: SimpleTableFilterItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<SimpleTableFilterItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange,
      this.filter.valueChanges.pipe(
        debounceTime(500),
        startWith(this.filter.value),
        distinctUntilChanged(),
        skip(1)
      ),
    ];

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(
          this.getSortedData(this.getFilteredData([...this.data]))
        );
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Filter the date (client-side). If you're using server-side filtering,
   * this would be replaced by requesting the appropriate data from the server
   */
  private getFilteredData(data: SimpleTableFilterItem[]) {
    const filterValue = this.filter.value?.toLowerCase();
    return !!filterValue
      ? data.filter((data) => data.name.toLowerCase().includes(filterValue))
      : data;
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: SimpleTableFilterItem[]) {
    this.paginator.length = data.length; //Set the
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SimpleTableFilterItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
