import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInputPannelInformationComponent } from './edit-input-pannel-information.component';

describe('EditInputPannelInformationComponent', () => {
  let component: EditInputPannelInformationComponent;
  let fixture: ComponentFixture<EditInputPannelInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInputPannelInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInputPannelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
