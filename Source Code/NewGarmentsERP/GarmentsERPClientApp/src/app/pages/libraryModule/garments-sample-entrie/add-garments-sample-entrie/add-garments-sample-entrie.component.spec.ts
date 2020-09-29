import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGarmentsSampleEntrieComponent } from './add-garments-sample-entrie.component';

describe('AddGarmentsSampleEntrieComponent', () => {
  let component: AddGarmentsSampleEntrieComponent;
  let fixture: ComponentFixture<AddGarmentsSampleEntrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGarmentsSampleEntrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGarmentsSampleEntrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
