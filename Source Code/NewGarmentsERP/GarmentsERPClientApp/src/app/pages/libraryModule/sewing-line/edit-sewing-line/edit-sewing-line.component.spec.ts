import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSewingLineComponent } from './edit-sewing-line.component';

describe('EditSewingLineComponent', () => {
  let component: EditSewingLineComponent;
  let fixture: ComponentFixture<EditSewingLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSewingLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSewingLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
