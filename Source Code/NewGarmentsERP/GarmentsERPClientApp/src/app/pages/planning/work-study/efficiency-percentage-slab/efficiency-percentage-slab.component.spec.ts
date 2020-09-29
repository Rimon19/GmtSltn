import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficiencyPercentageSlabComponent } from './efficiency-percentage-slab.component';

describe('EfficiencyPercentageSlabComponent', () => {
  let component: EfficiencyPercentageSlabComponent;
  let fixture: ComponentFixture<EfficiencyPercentageSlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfficiencyPercentageSlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficiencyPercentageSlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
