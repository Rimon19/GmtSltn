import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionCreateComponent } from './composition-create.component';

describe('CompositionCreateComponent', () => {
  let component: CompositionCreateComponent;
  let fixture: ComponentFixture<CompositionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
