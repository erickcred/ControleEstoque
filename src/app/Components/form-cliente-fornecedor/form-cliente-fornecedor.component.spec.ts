import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClienteFornecedorComponent } from './form-cliente-fornecedor.component';

describe('FormClienteFornecedorComponent', () => {
  let component: FormClienteFornecedorComponent;
  let fixture: ComponentFixture<FormClienteFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormClienteFornecedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormClienteFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
