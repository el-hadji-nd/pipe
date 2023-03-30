import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exemple'
})
export class ExemplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
