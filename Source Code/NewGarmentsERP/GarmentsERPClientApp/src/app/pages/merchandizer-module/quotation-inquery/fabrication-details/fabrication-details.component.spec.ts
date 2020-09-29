import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricationDetailsComponent } from './fabrication-details.component';

describe('FabricationDetailsComponent', () => {
  let component: FabricationDetailsComponent;
  let fixture: ComponentFixture<FabricationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
