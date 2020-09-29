import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBuyerComponent } from './show-buyer.component';

describe('ShowBuyerComponent', () => {
  let component: ShowBuyerComponent;
  let fixture: ComponentFixture<ShowBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
