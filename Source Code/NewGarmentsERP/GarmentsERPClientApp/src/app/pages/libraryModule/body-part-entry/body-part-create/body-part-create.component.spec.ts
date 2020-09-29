import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPartCreateComponent } from './body-part-create.component';

describe('BodyPartCreateComponent', () => {
  let component: BodyPartCreateComponent;
  let fixture: ComponentFixture<BodyPartCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPartCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPartCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
