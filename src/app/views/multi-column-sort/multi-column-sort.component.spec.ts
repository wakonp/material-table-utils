import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColumnSortComponent } from './multi-column-sort.component';

describe('MultiColumnSortComponent', () => {
  let component: MultiColumnSortComponent;
  let fixture: ComponentFixture<MultiColumnSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiColumnSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiColumnSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
