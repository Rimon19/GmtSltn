import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageobjectcreatorComponent } from './pageobjectcreator.component';

describe('PageobjectcreatorComponent', () => {
  let component: PageobjectcreatorComponent;
  let fixture: ComponentFixture<PageobjectcreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageobjectcreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageobjectcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
