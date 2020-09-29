import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtsWashComponent } from './gmts-wash.component';

describe('GmtsWashComponent', () => {
  let component: GmtsWashComponent;
  let fixture: ComponentFixture<GmtsWashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmtsWashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmtsWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
