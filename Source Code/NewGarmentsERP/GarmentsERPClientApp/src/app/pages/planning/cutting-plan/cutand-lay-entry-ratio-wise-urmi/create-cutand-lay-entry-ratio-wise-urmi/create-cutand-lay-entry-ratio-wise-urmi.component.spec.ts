import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCutandLayEntryRatioWiseUrmiComponent } from './create-cutand-lay-entry-ratio-wise-urmi.component';

describe('CreateCutandLayEntryRatioWiseUrmiComponent', () => {
  let component: CreateCutandLayEntryRatioWiseUrmiComponent;
  let fixture: ComponentFixture<CreateCutandLayEntryRatioWiseUrmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCutandLayEntryRatioWiseUrmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCutandLayEntryRatioWiseUrmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
