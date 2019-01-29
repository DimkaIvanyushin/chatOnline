import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smile'
})
export class SmilePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace(':)', '<i class="fas fa-smile smile"></i>')
      .replace(';)', '<i class="fas fa-smile-wink smile"></i>')
      .replace(':D', '<i class="fas fa-grin-alt smile"></i>')
      .replace('|)', '<i class="fas fa-smile-beam smile"></i>')
      .replace('xD', '<i class="fas fa-grin-squint smile"></i>')
      .replace(':(', '<i class="fas fa-grin-beam-sweat smile"></i>')
      .replace('0_0', '<i class="fas fa-surprise smile"></i>');
  }

}
