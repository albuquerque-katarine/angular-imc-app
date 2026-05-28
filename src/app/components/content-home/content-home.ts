import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceImc } from '../../services/service-imc';

@Component({
  selector: 'app-content-home',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './content-home.html',
  styleUrl: './content-home.css',
})
export class ContentHome {

    peso:number = 0;
    altura:number = 0;
    imc:number = 0;
  
    style = {
      "font-size": '1.3rem'
    }
  
    pessoa = new FormGroup({
      peso: new FormControl('', [Validators.required, Validators.min(1), Validators.max(150)]),
      altura: new FormControl('', [Validators.required, Validators.min(1), Validators.max(3)])
    });
  
    constructor(private serviceImc: ServiceImc){}
  
    calcularImc():void {
      this.peso = Number(this.pessoa.value.peso);
      this.altura = Number(this.pessoa.value.altura);
      this.imc = this.serviceImc.calcularImc(this.peso, this.altura);
      this.pessoa.reset();
    }
  
    limpar():void {
      this.pessoa.reset();
      this.imc = 0;
      this.peso = 0;
      this.altura = 0;
    }
}
