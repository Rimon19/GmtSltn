import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPreCoastingComponent } from './edit-pre-coasting.component';

describe('EditPreCoastingComponent', () => {
  let component: EditPreCoastingComponent;
  let fixture: ComponentFixture<EditPreCoastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPreCoastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPreCoastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
