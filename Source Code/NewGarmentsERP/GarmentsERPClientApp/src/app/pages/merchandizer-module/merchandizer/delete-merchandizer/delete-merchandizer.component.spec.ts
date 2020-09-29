import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMerchandizerComponent } from './delete-merchandizer.component';

describe('DeleteMerchandizerComponent', () => {
  let component: DeleteMerchandizerComponent;
  let fixture: ComponentFixture<DeleteMerchandizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMerchandizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMerchandizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
