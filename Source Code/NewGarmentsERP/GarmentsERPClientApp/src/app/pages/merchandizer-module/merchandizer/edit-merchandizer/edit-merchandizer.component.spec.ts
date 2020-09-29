import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMerchandizerComponent } from './edit-merchandizer.component';

describe('EditMerchandizerComponent', () => {
  let component: EditMerchandizerComponent;
  let fixture: ComponentFixture<EditMerchandizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMerchandizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMerchandizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
