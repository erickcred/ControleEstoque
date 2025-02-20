import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentaUsuarioComponent } from './apresenta-usuario.component';

describe('ApresentaUsuarioComponent', () => {
  let component: ApresentaUsuarioComponent;
  let fixture: ComponentFixture<ApresentaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApresentaUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresentaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
