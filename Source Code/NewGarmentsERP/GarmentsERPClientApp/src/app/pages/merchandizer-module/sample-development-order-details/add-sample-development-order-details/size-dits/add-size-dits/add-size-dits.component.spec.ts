import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSizeDitsComponent } from './add-size-dits.component';

describe('AddSizeDitsComponent', () => {
  let component: AddSizeDitsComponent;
  let fixture: ComponentFixture<AddSizeDitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSizeDitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSizeDitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
