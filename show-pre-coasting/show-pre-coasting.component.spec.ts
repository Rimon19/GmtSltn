import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPreCoastingComponent } from './show-pre-coasting.component';

describe('ShowPreCoastingComponent', () => {
  let component: ShowPreCoastingComponent;
  let fixture: ComponentFixture<ShowPreCoastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPreCoastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPreCoastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
