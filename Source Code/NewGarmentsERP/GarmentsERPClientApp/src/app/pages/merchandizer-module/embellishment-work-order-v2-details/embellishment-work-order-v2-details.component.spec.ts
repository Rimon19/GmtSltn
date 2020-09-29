import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbellishmentWorkOrderV2DetailsComponent } from './embellishment-work-order-v2-details.component';

describe('EmbellishmentWorkOrderV2DetailsComponent', () => {
  let component: EmbellishmentWorkOrderV2DetailsComponent;
  let fixture: ComponentFixture<EmbellishmentWorkOrderV2DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbellishmentWorkOrderV2DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbellishmentWorkOrderV2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
