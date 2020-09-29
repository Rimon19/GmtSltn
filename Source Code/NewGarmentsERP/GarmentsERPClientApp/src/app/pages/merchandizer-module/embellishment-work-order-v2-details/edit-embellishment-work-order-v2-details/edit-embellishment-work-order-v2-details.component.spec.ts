import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmbellishmentWorkOrderV2DetailsComponent } from './edit-embellishment-work-order-v2-details.component';

describe('EditEmbellishmentWorkOrderV2DetailsComponent', () => {
  let component: EditEmbellishmentWorkOrderV2DetailsComponent;
  let fixture: ComponentFixture<EditEmbellishmentWorkOrderV2DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmbellishmentWorkOrderV2DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmbellishmentWorkOrderV2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
