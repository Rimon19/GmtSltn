import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeInfoComponent } from './size-info.component';

describe('SizeInfoComponent', () => {
  let component: SizeInfoComponent;
  let fixture: ComponentFixture<SizeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
