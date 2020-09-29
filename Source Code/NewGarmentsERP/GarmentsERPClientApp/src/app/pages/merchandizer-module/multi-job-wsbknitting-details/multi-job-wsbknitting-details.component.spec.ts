import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiJobWSBKnittingDetailsComponent } from './multi-job-wsbknitting-details.component';

describe('MultiJobWSBKnittingDetailsComponent', () => {
  let component: MultiJobWSBKnittingDetailsComponent;
  let fixture: ComponentFixture<MultiJobWSBKnittingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiJobWSBKnittingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiJobWSBKnittingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
