import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeDitsComponent } from './size-dits.component';

describe('SizeDitsComponent', () => {
  let component: SizeDitsComponent;
  let fixture: ComponentFixture<SizeDitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeDitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeDitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
