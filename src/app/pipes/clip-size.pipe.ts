import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clipSize'
})
export class ClipSizePipe implements PipeTransform {
  transform(bytes: number = 0): string {
    const sizes = ['B', 'KB', 'MB', 'GB'],
          i = Math.floor(Math.log(bytes) / Math.log(1024));

    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
