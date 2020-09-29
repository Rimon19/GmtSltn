import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoreLocationComponent } from './edit-store-location.component';

describe('EditStoreLocationComponent', () => {
  let component: EditStoreLocationComponent;
  let fixture: ComponentFixture<EditStoreLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStoreLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoreLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
