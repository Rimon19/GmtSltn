import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMachineEntrieComponent } from './edit-machine-entrie.component';

describe('EditMachineEntrieComponent', () => {
  let component: EditMachineEntrieComponent;
  let fixture: ComponentFixture<EditMachineEntrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMachineEntrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMachineEntrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
