import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGarmentsSampleEntrieComponent } from './edit-garments-sample-entrie.component';

describe('EditGarmentsSampleEntrieComponent', () => {
  let component: EditGarmentsSampleEntrieComponent;
  let fixture: ComponentFixture<EditGarmentsSampleEntrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGarmentsSampleEntrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGarmentsSampleEntrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
