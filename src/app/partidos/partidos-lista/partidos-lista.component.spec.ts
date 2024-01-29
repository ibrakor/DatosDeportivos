import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosListaComponent } from './partidos-lista.component';

describe('PartidosListaComponent', () => {
  let component: PartidosListaComponent;
  let fixture: ComponentFixture<PartidosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidosListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartidosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
