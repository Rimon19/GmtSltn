import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYarnBrandComponent } from './edit-yarn-brand.component';

describe('EditYarnBrandComponent', () => {
  let component: EditYarnBrandComponent;
  let fixture: ComponentFixture<EditYarnBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYarnBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYarnBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
