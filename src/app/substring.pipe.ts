/**
 * Created by xtkf16 on 2017/9/21.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'substring'})
export class SubstringPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (value.length > length) {
      // value = value.replace(/[\r\n]/g, '');
      value = value.substring(0, length);
      return value + '...';
    }
    return value;
  }
}
