import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPiDetailsComponent } from './add-pi-details.component';

describe('AddPiDetailsComponent', () => {
  let component: AddPiDetailsComponent;
  let fixture: ComponentFixture<AddPiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
