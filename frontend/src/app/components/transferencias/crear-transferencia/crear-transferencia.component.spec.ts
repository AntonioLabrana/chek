import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTransferenciaComponent } from './crear-transferencia.component';

describe('CrearTransferenciaComponent', () => {
  let component: CrearTransferenciaComponent;
  let fixture: ComponentFixture<CrearTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
