import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDevelopmentOrderDetailsComponent } from './sample-development-order-details.component';

describe('SampleDevelopmentOrderDetailsComponent', () => {
  let component: SampleDevelopmentOrderDetailsComponent;
  let fixture: ComponentFixture<SampleDevelopmentOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDevelopmentOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDevelopmentOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
