import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandizerComponent } from './merchandizer.component';

describe('MerchandizerComponent', () => {
  let component: MerchandizerComponent;
  let fixture: ComponentFixture<MerchandizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchandizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
