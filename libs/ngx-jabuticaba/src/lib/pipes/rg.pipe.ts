import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rg',
})
export class RgPipe implements PipeTransform {
  transform(value: string | number): string {
    if (value) {
      return value.toString()
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4');
    }
    return '';
  }
}
