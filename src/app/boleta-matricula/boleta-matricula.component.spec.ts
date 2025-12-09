import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletaMatriculaComponent } from './boleta-matricula.component';

describe('BoletaMatriculaComponent', () => {
  let component: BoletaMatriculaComponent;
  let fixture: ComponentFixture<BoletaMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoletaMatriculaComponent]
    });
    fixture = TestBed.createComponent(BoletaMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
