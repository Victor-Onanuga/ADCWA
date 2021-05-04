import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSalesPersonComponent } from './delete-sales-person.component';

describe('DeleteSalesPersonComponent', () => {
  let component: DeleteSalesPersonComponent;
  let fixture: ComponentFixture<DeleteSalesPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSalesPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSalesPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
