import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieLength'
})
export class MovieLengthPipe implements PipeTransform {

  transform(movieLength: string): string {
    return movieLength.replace('h', ' hours, ').replace('m', ' minutes');
  }

}
