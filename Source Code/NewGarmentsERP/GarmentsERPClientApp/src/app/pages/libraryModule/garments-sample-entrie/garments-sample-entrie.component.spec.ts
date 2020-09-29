import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentsSampleEntrieComponent } from './garments-sample-entrie.component';

describe('GarmentsSampleEntrieComponent', () => {
  let component: GarmentsSampleEntrieComponent;
  let fixture: ComponentFixture<GarmentsSampleEntrieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentsSampleEntrieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentsSampleEntrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
