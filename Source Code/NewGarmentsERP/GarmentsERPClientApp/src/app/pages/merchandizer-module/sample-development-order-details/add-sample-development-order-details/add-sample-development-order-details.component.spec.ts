import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSampleDevelopmentOrderDetailsComponent } from './add-sample-development-order-details.component';

describe('AddSampleDevelopmentOrderDetailsComponent', () => {
  let component: AddSampleDevelopmentOrderDetailsComponent;
  let fixture: ComponentFixture<AddSampleDevelopmentOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSampleDevelopmentOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSampleDevelopmentOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
