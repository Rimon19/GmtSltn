import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYarnBrandComponent } from './add-yarn-brand.component';

describe('AddYarnBrandComponent', () => {
  let component: AddYarnBrandComponent;
  let fixture: ComponentFixture<AddYarnBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYarnBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYarnBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
