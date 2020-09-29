import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSizeDitsComponent } from './edit-size-dits.component';

describe('EditSizeDitsComponent', () => {
  let component: EditSizeDitsComponent;
  let fixture: ComponentFixture<EditSizeDitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSizeDitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSizeDitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
