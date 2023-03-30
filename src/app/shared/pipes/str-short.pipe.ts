import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class StrShortPipe implements PipeTransform {

  // transform(value: string): string {

  //   if (value.length <= 10) {
  //     return value;
  //   }

  //   return value.substring(0, 10) + '…';
  // }

  transform(value: any[], key: string): any[] {
    console.log("Pipe impur");
    return value.sort((a, b) => a[key] > b[key] ? 1 : -1);
  }
}
