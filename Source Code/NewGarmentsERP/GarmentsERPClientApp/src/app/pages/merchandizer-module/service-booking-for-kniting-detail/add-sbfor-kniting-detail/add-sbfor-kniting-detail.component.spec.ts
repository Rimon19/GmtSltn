import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSBForKnitingDetailComponent } from './add-sbfor-kniting-detail.component';

describe('AddSBForKnitingDetailComponent', () => {
  let component: AddSBForKnitingDetailComponent;
  let fixture: ComponentFixture<AddSBForKnitingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSBForKnitingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSBForKnitingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
