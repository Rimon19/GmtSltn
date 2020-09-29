import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGarmentsItemEntriesComponent } from './edit-garments-item-entries.component';

describe('EditGarmentsItemEntriesComponent', () => {
  let component: EditGarmentsItemEntriesComponent;
  let fixture: ComponentFixture<EditGarmentsItemEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGarmentsItemEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGarmentsItemEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
