import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCardTableComponent } from './description-card-table.component';

describe('DescriptionCardTableComponent', () => {
  let component: DescriptionCardTableComponent;
  let fixture: ComponentFixture<DescriptionCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionCardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
