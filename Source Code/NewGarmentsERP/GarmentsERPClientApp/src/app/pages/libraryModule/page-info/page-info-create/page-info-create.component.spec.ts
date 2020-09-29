import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfoCreateComponent } from './page-info-create.component';

describe('PageInfoCreateComponent', () => {
  let component: PageInfoCreateComponent;
  let fixture: ComponentFixture<PageInfoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInfoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInfoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
