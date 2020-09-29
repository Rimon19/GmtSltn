import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMerchandizerComponent } from './add-merchandizer.component';

describe('AddMerchandizerComponent', () => {
  let component: AddMerchandizerComponent;
  let fixture: ComponentFixture<AddMerchandizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMerchandizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMerchandizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
