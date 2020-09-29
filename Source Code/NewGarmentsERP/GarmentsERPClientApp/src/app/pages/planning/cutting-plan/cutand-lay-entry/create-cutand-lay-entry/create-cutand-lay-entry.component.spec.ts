import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCutandLayEntryComponent } from './create-cutand-lay-entry.component';

describe('CreateCutandLayEntryComponent', () => {
  let component: CreateCutandLayEntryComponent;
  let fixture: ComponentFixture<CreateCutandLayEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCutandLayEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCutandLayEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
