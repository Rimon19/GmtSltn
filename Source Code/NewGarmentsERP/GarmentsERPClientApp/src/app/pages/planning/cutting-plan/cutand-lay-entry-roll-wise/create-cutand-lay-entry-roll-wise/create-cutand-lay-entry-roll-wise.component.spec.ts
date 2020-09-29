import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCutandLayEntryRollWiseComponent } from './create-cutand-lay-entry-roll-wise.component';

describe('CreateCutandLayEntryRollWiseComponent', () => {
  let component: CreateCutandLayEntryRollWiseComponent;
  let fixture: ComponentFixture<CreateCutandLayEntryRollWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCutandLayEntryRollWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCutandLayEntryRollWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
