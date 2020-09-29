import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMachineEntrieComponent } from './add-machine-entrie.component';

describe('AddMachineEntrieComponent', () => {
  let component: AddMachineEntrieComponent;
  let fixture: ComponentFixture<AddMachineEntrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMachineEntrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMachineEntrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
