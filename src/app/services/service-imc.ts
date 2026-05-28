import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceImc {  

  calcularImc(peso:number, altura:number):number {
    return peso / (altura * altura);
  }
}
