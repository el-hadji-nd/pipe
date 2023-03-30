import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    console.log("pipe pur");
    return value.split('').reverse().join('');
  }

}
