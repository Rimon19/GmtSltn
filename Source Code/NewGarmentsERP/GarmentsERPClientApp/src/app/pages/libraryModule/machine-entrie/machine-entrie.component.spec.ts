import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineEntrieComponent } from './machine-entrie.component';

describe('MachineEntrieComponent', () => {
  let component: MachineEntrieComponent;
  let fixture: ComponentFixture<MachineEntrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineEntrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineEntrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
