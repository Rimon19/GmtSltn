import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCoastingComponent } from './pre-coasting.component';

describe('PreCoastingComponent', () => {
  let component: PreCoastingComponent;
  let fixture: ComponentFixture<PreCoastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreCoastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCoastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
