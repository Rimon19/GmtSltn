import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSBForKnitingDetailComponent } from './edit-sbfor-kniting-detail.component';

describe('EditSBForKnitingDetailComponent', () => {
  let component: EditSBForKnitingDetailComponent;
  let fixture: ComponentFixture<EditSBForKnitingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSBForKnitingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSBForKnitingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
