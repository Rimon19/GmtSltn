import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPoInformationComponent } from './edit-po-information.component';

describe('EditPoInformationComponent', () => {
  let component: EditPoInformationComponent;
  let fixture: ComponentFixture<EditPoInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPoInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPoInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
