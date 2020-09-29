import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGarmentsItemEntriesComponent } from './add-garments-item-entries.component';

describe('AddGarmentsItemEntriesComponent', () => {
  let component: AddGarmentsItemEntriesComponent;
  let fixture: ComponentFixture<AddGarmentsItemEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGarmentsItemEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGarmentsItemEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
