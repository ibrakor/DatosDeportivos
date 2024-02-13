import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoCrearFormComponent } from './partido-crear-form.component';

describe('PartidoCrearFormComponent', () => {
  let component: PartidoCrearFormComponent;
  let fixture: ComponentFixture<PartidoCrearFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidoCrearFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartidoCrearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
