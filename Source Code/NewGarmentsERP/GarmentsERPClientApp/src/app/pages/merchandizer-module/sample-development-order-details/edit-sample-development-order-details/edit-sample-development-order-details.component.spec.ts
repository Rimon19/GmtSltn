import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSampleDevelopmentOrderDetailsComponent } from './edit-sample-development-order-details.component';

describe('EditSampleDevelopmentOrderDetailsComponent', () => {
  let component: EditSampleDevelopmentOrderDetailsComponent;
  let fixture: ComponentFixture<EditSampleDevelopmentOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSampleDevelopmentOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSampleDevelopmentOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
