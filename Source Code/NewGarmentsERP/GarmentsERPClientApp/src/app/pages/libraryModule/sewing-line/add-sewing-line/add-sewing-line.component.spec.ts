import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSewingLineComponent } from './add-sewing-line.component';

describe('AddSewingLineComponent', () => {
  let component: AddSewingLineComponent;
  let fixture: ComponentFixture<AddSewingLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSewingLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSewingLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
