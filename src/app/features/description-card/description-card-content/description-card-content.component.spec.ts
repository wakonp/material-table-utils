import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCardContentComponent } from './description-card-content.component';

describe('DescriptionCardContentComponent', () => {
  let component: DescriptionCardContentComponent;
  let fixture: ComponentFixture<DescriptionCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
