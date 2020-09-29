import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBuyerComponent } from './delete-buyer.component';

describe('DeleteBuyerComponent', () => {
  let component: DeleteBuyerComponent;
  let fixture: ComponentFixture<DeleteBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
