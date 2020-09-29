import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTNATaskPercentComponent } from './edit-tnatask-percent.component';

describe('EditTNATaskPercentComponent', () => {
  let component: EditTNATaskPercentComponent;
  let fixture: ComponentFixture<EditTNATaskPercentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTNATaskPercentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTNATaskPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
