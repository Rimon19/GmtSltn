import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricDescriptionComponent } from './fabric-description.component';

describe('FabricDescriptionComponent', () => {
  let component: FabricDescriptionComponent;
  let fixture: ComponentFixture<FabricDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
