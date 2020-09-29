import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcontractComponent } from './subcontract.component';

describe('SubcontractComponent', () => {
  let component: SubcontractComponent;
  let fixture: ComponentFixture<SubcontractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcontractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
