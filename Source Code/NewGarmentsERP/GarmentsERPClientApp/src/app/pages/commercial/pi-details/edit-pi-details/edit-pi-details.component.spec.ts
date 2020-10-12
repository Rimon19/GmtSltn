import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPiDetailsComponent } from './edit-pi-details.component';

describe('EditPiDetailsComponent', () => {
  let component: EditPiDetailsComponent;
  let fixture: ComponentFixture<EditPiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
