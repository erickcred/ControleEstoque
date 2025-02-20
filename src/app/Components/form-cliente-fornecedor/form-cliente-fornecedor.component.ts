import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponentComponent } from '@components/header-component/header-component.component';
import { ETipoPessoa } from '@dtos/enums/ETipoPessoa';
import { MatModule } from '@shared/mat-module/mat.module';

@Component({
  selector: 'app-form-cliente-fornecedor',
  imports: [
    ReactiveFormsModule,
    MatModule,
    HeaderComponentComponent,
  ],
  templateUrl: './form-cliente-fornecedor.component.html',
  styleUrl: './form-cliente-fornecedor.component.scss'
})
export class FormClienteFornecedorComponent implements OnInit {

  @Input() nomeComponete!: string;
  formData!: FormGroup;
  eTipoPessoa = Object.entries(ETipoPessoa) as Array<[string, ETipoPessoa]>;
  ETipoPessoa = ETipoPessoa;
  pessoaJuridica = false;
  pessoaFisica = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      cnpj: [''],
      email: ['', Validators.email],
      tipo: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.getTipoSelecionado();
  }

  getTipoSelecionado() {
    this.formData.get('tipo')?.valueChanges.subscribe(value => {
      this.pessoaJuridica = value === ETipoPessoa.Juridica;
      this.pessoaFisica = value === ETipoPessoa.Fisica;
      this.resetaValoresCpfCnpj();

      console.log('Pessoa juridica: ', this.pessoaJuridica);
      console.log('Pessoa fisica: ', this.pessoaFisica);
    });
  }

  resetaValoresCpfCnpj() {
    if (this.pessoaFisica) {
      this.formData.get('cnpj')?.setValue('');
      this.formData.get('cpf')?.setValidators([Validators.required]);
      this.formData.get('cnpj')?.clearValidators();
    } else if (this.pessoaJuridica) {
      this.formData.get('cpf')?.setValue('');
      this.formData.get('cnpj')?.setValidators([Validators.required]);
      this.formData.get('cpf')?.clearValidators();
    }
  }

  @Output() onSubmitEvent: EventEmitter<any> = new EventEmitter();

  onSubmit(): void {
    if (this.formData.invalid) {
      return;
    }
    this.onSubmitEvent.emit(this.formData.value);
    this.formData.reset();
    this.formData.setValidators(null);
    this.formData.clearValidators();
    this.formData.markAsDirty();
    this.formData.markAsPristine(); // Remove a indicação de modificação
    this.formData.markAsUntouched(); // Deixa os campos como "não tocados"
    this.formData.updateValueAndValidity(); // Atualiza a validação do formulário inteiro
  }
}
