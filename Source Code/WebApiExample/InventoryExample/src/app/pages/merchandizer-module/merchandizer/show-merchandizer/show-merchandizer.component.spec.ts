import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMerchandizerComponent } from './show-merchandizer.component';

describe('ShowMerchandizerComponent', () => {
  let component: ShowMerchandizerComponent;
  let fixture: ComponentFixture<ShowMerchandizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMerchandizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMerchandizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
