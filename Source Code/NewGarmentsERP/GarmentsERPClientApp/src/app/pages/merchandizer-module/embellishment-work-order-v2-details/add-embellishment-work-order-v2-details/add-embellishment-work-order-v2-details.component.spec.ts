import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmbellishmentWorkOrderV2DetailsComponent } from './add-embellishment-work-order-v2-details.component';

describe('AddEmbellishmentWorkOrderV2DetailsComponent', () => {
  let component: AddEmbellishmentWorkOrderV2DetailsComponent;
  let fixture: ComponentFixture<AddEmbellishmentWorkOrderV2DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmbellishmentWorkOrderV2DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmbellishmentWorkOrderV2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
