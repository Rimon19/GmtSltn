import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfoEditComponent } from './page-info-edit.component';

describe('PageInfoEditComponent', () => {
  let component: PageInfoEditComponent;
  let fixture: ComponentFixture<PageInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
