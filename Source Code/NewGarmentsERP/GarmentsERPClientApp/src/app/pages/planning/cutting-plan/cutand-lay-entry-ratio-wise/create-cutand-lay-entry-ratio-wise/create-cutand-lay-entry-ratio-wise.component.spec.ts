import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCutandLayEntryRatioWiseComponent } from './create-cutand-lay-entry-ratio-wise.component';

describe('CreateCutandLayEntryRatioWiseComponent', () => {
  let component: CreateCutandLayEntryRatioWiseComponent;
  let fixture: ComponentFixture<CreateCutandLayEntryRatioWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCutandLayEntryRatioWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCutandLayEntryRatioWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
