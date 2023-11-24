import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutaionPipe'
})
export class SalutaionPipePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr.' + name;
    } else if (gender.toLocaleLowerCase() === 'female') {
      return 'Miss.' + name;
    } else {
      return name
    }

  }

}
