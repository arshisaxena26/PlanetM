import { Pipe, PipeTransform } from '@angular/core';
import { Music } from '../models/music';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Music[], args: string): any[] {
    if (!value) return [];
    if (!args) return value;

    return value.filter(m => {
      return m.musicName.toLowerCase().includes(args.toLowerCase())
    });
  }

}
