import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPartEditComponent } from './body-part-edit.component';

describe('BodyPartEditComponent', () => {
  let component: BodyPartEditComponent;
  let fixture: ComponentFixture<BodyPartEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPartEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
