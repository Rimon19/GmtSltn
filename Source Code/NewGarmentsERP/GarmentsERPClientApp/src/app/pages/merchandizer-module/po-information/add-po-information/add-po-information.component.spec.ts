import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoInformationComponent } from './add-po-information.component';

describe('AddPoInformationComponent', () => {
  let component: AddPoInformationComponent;
  let fixture: ComponentFixture<AddPoInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPoInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
