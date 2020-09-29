import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInputPannelInformationComponent } from './add-input-pannel-information.component';

describe('AddInputPannelInformationComponent', () => {
  let component: AddInputPannelInformationComponent;
  let fixture: ComponentFixture<AddInputPannelInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInputPannelInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInputPannelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
