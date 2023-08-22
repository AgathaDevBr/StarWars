import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPlanetasComponent } from './consulta-planetas.component';

describe('ConsultaPlanetasComponent', () => {
  let component: ConsultaPlanetasComponent;
  let fixture: ComponentFixture<ConsultaPlanetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPlanetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
