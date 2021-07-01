import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './pipes/cpf.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { RgPipe } from './pipes/rg.pipe';

const pipes = [CpfPipe, CnpjPipe, RgPipe];
const directives: any[] = [];

@NgModule({
  imports: [CommonModule],
  declarations: [...pipes, ...directives],
  exports: [...pipes, ...directives],
})
export class NgxJabuticabaModule {}
