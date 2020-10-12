import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiDetailsComponent } from './pi-details.component';

describe('PiDetailsComponent', () => {
  let component: PiDetailsComponent;
  let fixture: ComponentFixture<PiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
