import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentsItemEntriesComponent } from './garments-item-entries.component';

describe('GarmentsItemEntriesComponent', () => {
  let component: GarmentsItemEntriesComponent;
  let fixture: ComponentFixture<GarmentsItemEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarmentsItemEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarmentsItemEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
