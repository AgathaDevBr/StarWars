import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesListComponent } from './peoples-list.component';

describe('PeoplesListComponent', () => {
  let component: PeoplesListComponent;
  let fixture: ComponentFixture<PeoplesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplesListComponent]
    });
    fixture = TestBed.createComponent(PeoplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
