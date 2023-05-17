import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
