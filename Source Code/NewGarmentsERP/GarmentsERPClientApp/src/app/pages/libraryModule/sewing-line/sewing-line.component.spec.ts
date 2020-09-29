import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SewingLineComponent } from './sewing-line.component';

describe('SewingLineComponent', () => {
  let component: SewingLineComponent;
  let fixture: ComponentFixture<SewingLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SewingLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SewingLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
